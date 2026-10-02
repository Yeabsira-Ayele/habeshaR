import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../components/useDocumentTitle";
import { branches } from "../Data/branchData";
import { allItems, type MenuItem } from "../Data/menuData";
import { btnPrimary } from "../Data/homePageData";
import { useOrder } from "../store/orderStore";
import { formatBirr, whatsappHref } from "../utils/format";
import { phoneSchema } from "../utils/validation";
import placeholder from "../assets/placeholder.svg";

type Step = 0 | 1 | 2;
type OrderLine = { item: MenuItem; qty: number };

const STEPS = ["Review order", "Choose branch", "Place order"] as const;

function Stepper({ current }: { current: Step }) {
  return (
    <ol className="mb-8 flex items-stretch justify-center gap-6 border-b border-gray-200 text-sm text-gray-500 sm:mb-10 sm:gap-12">
      {STEPS.map((label, index) => {
        const active = current === index;
        return (
          <li
            key={label}
            aria-current={active ? "step" : undefined}
            className={`-mb-px flex items-center gap-2 border-b-2 pb-4 ${
              active ? "border-black font-semibold text-black" : "border-transparent"
            }`}
          >
            <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            {/* On phones only the active label shows, so the bar never overflows */}
            <span className={active ? "" : "hidden sm:inline"}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

function StepNav({
  onBack,
  onNext,
  nextLabel,
  nextIcon,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
  nextIcon: React.ReactNode;
}) {
  return (
    <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
      <button type="button" onClick={onBack} className="btn btn-outline btn-lg sm:min-w-[160px]">
        <ArrowLeft size={18} /> Back
      </button>
      <button type="button" onClick={onNext} className="btn btn-primary btn-lg sm:min-w-[200px]">
        {nextLabel} {nextIcon}
      </button>
    </div>
  );
}

function Order() {
  useDocumentTitle("Your order");

  const lines = useOrder((state) => state.lines);
  const { add, decrement, remove, clear } = useOrder();
  const [step, setStep] = useState<Step>(0);
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0]?.id ?? "");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);

  const entries: OrderLine[] = Object.entries(lines).flatMap(([id, qty]) => {
    const item = allItems.find((menuItem) => menuItem.id === id);
    return item ? [{ item, qty }] : [];
  });
  const total = entries.reduce((sum, { item, qty }) => sum + item.price * qty, 0);
  const selectedBranch = branches.find((branch) => branch.id === selectedBranchId) ?? null;
  const itemsCount = entries.reduce((sum, { qty }) => sum + qty, 0);

  const goBack = () => {
    setError("");
    setStep((current) => (current > 0 ? ((current - 1) as Step) : 0));
  };

  const goNext = () => {
    if (step === 0) {
      setStep(1);
      return;
    }

    if (step === 1) {
      if (!selectedBranchId) {
        setError("Please choose a branch before continuing.");
        return;
      }
      setError("");
      setStep(2);
    }
  };

  const placeOrder = () => {
    if (!selectedBranch) {
      setError("Please choose a branch.");
      return;
    }

    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    const phoneCheck = phoneSchema.safeParse(phone);
    if (!phoneCheck.success) {
      setError(phoneCheck.error.issues[0]?.message ?? "Please enter a valid phone number.");
      return;
    }

    const message = [
      `New order for ${selectedBranch.name}`,
      "",
      ...entries.map(({ item, qty }) => `${qty} x ${item.nameEng} - ${formatBirr(item.price * qty)}`),
      "",
      `Total: ${formatBirr(total)}`,
      "",
      `Name: ${fullName.trim()}`,
      `Phone: ${phone.trim()}`,
    ].join("\n");

    window.open(whatsappHref(selectedBranch.phone, message), "_blank", "noopener");
    setSentTo(selectedBranch.name);
    setError("");
  };

  /* ---------- Empty state ---------- */
  if (entries.length === 0) {
    return (
      <div className="container-page max-w-5xl py-10 md:py-14">
        <Stepper current={0} />

        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-8 text-center">
          <h1 className="display text-4xl md:text-5xl">Your order is empty</h1>
          <p className="text-gray-600">Add something from the menu to get started.</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to="/foods" className="btn btn-primary btn-lg">
              {btnPrimary.browseFoods}
            </Link>
            <Link to="/drinks" className="btn btn-outline btn-lg">
              Browse drinks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page max-w-5xl py-10 md:py-14">
      <Stepper current={step} />

      {/* ---------- Step 1: Review ---------- */}
      {step === 0 && (
        <div>
          <h1 className="sr-only">Review your order</h1>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {entries.map(({ item, qty }) => (
              <li key={item.id} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex min-w-0 items-center gap-4">
                  <img
                    src={item.img ?? placeholder}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-lg bg-gray-100 object-cover sm:h-20 sm:w-20"
                  />
                  <div className="min-w-0">
                    <p className="text-lg font-semibold leading-snug">{item.nameEng}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{formatBirr(item.price)} each</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-6">
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      type="button"
                      onClick={() => decrement(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-l-lg hover:bg-gray-100"
                      aria-label={`Remove one ${item.nameEng}`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-r-lg hover:bg-gray-100"
                      aria-label={`Add one ${item.nameEng}`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="min-w-[96px] text-right text-lg font-bold tabular-nums">
                      {formatBirr(item.price * qty)}
                    </span>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-black"
                      aria-label={`Remove ${item.nameEng} from order`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {itemsCount} {itemsCount === 1 ? "item" : "items"} selected
              </p>
              <p className="mt-1 text-3xl font-bold tabular-nums">Total: {formatBirr(total)}</p>
            </div>

            <button type="button" onClick={goNext} className="btn btn-primary btn-lg sm:min-w-[220px]">
              Choose branch <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-6">
            <Link to="/foods" className="link-arrow">
              Add more food
            </Link>
            <Link to="/drinks" className="link-arrow">
              Add drinks
            </Link>
            <button
              type="button"
              onClick={() => clear()}
              className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline sm:ml-auto"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* ---------- Step 2: Branch ---------- */}
      {step === 1 && (
        <div>
          <h1 className="mb-6 text-xl font-semibold sm:text-2xl">Select the branch you&apos;d like to order from</h1>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {branches.map((branch) => {
              const isSelected = selectedBranchId === branch.id;

              return (
                <button
                  key={branch.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedBranchId(branch.id);
                    setError("");
                  }}
                  className={`flex min-h-[200px] flex-col justify-between gap-6 rounded-xl border p-6 text-left transition-colors duration-200 ${
                    isSelected ? "border-black bg-black text-white" : "border-gray-300 bg-white text-black hover:border-black"
                  }`}
                >
                  <div>
                    <h2 className="font-condensed text-3xl font-bold leading-tight">{branch.name}</h2>
                    <p className={`mt-2 text-sm leading-relaxed ${isSelected ? "text-white/80" : "text-gray-600"}`}>
                      {branch.address}
                    </p>
                  </div>

                  <p className="font-semibold tabular-nums">{branch.phone}</p>
                </button>
              );
            })}
          </div>

          {error && (
            <p role="alert" className="mt-4 text-sm text-red-600">
              {error}
            </p>
          )}

          <StepNav onBack={goBack} onNext={goNext} nextLabel="Continue" nextIcon={<ArrowRight size={18} />} />
        </div>
      )}

      {/* ---------- Step 3: Place order ---------- */}
      {step === 2 && (
        <div>
          <h1 className="sr-only">Place your order</h1>
          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
            <p className="eyebrow">Ordering from</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="font-condensed text-3xl font-bold">{selectedBranch?.name}</p>
                <p className="mt-1 text-gray-600">{selectedBranch?.address}</p>
              </div>
              <p className="text-2xl font-bold tabular-nums">{formatBirr(total)}</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-5">
              <div>
                <label className="field-label" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Your full name"
                  className="field-input"
                />
              </div>

              <div>
                <label className="field-label" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+251 9__ __ __"
                  className="field-input"
                />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
              <p className="eyebrow">Items</p>
              <ul className="mt-4 space-y-3">
                {entries.map(({ item, qty }) => (
                  <li
                    key={item.id}
                    className="flex items-baseline justify-between gap-4 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="min-w-0">
                      {item.nameEng} <span className="text-gray-500">x {qty}</span>
                    </span>
                    <span className="shrink-0 font-medium tabular-nums">{formatBirr(item.price * qty)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-6 text-sm text-red-600">
              {error}
            </p>
          )}
          {sentTo && (
            <p role="status" className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
              Order opened for {sentTo}. Send the message in WhatsApp to confirm it.
            </p>
          )}

          <StepNav onBack={goBack} onNext={placeOrder} nextLabel="Send order" nextIcon={<MessageCircle size={18} />} />
        </div>
      )}
    </div>
  );
}

export default Order;
