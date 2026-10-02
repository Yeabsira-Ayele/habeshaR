import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";
import PageHeader from "../components/pageHeader";
import { branches, contactData, workingHours } from "../Data/contactData";
import { btnPrimary } from "../Data/homePageData";
import { telHref, whatsappHref } from "../utils/format";
import { phoneSchema } from "../utils/validation";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  phone: phoneSchema,
  email: z.union([z.literal(""), z.string().email("Enter a valid email address")]),
  message: z.string().trim().min(5, "Tell us a little more"),
});

type ContactForm = z.infer<typeof contactSchema>;

// TODO: replace with a real request, e.g. axios.post("/api/contact", data)
async function sendMessage(_data: ContactForm) {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    await sendMessage(data);
    setSent(true);
    reset();
  };

  return (
    <div>
      <PageHeader title="Contact" subtitle="Questions, feedback, or a large order? Send a message or call the branch nearest you." />

      <div className="container-page grid grid-cols-1 gap-14 py-10 md:py-16 lg:grid-cols-2 lg:gap-20">
        {/* Send a message */}
        <section>
          <h2 className="display mb-8 text-3xl md:text-4xl">
            Send a Message
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            {contactData.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="field-label">
                  {field.label}
                  {field.optional && <span className="ml-2 font-normal text-gray-500">(optional)</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    rows={6}
                    placeholder={field.placeholder}
                    aria-invalid={!!errors[field.name]}
                    className="field-input resize-none"
                    {...register(field.name)}
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-invalid={!!errors[field.name]}
                    className="field-input"
                    {...register(field.name)}
                  />
                )}

                {errors[field.name] && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg mt-2 w-full"
            >
              {isSubmitting ? "Sending…" : btnPrimary.sendMesage}
            </button>

            {sent && (
              <p role="status" className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
                Thanks, your message was sent. We'll get back to you soon.
              </p>
            )}
          </form>
        </section>

        {/* Direct contact */}
        <section>
          <h2 className="display mb-8 text-3xl md:text-4xl">
            Direct Contact
          </h2>

          <div>
            {branches.map((branch) => (
              <div key={branch.id} className="border-b border-gray-200 py-6 first:pt-0">
                <h3 className="text-xl font-bold">{branch.name}</h3>
                <p className="mt-1 text-gray-600">{branch.address}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a href={telHref(branch.phone)} className="flex items-center gap-2 font-medium tabular-nums hover:underline">
                    <Phone size={16} aria-hidden /> {branch.phone}
                  </a>
                  <a
                    href={whatsappHref(branch.phone)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-medium text-green-700 hover:underline"
                  >
                    <MessageCircle size={16} aria-hidden /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-6">
            <p className="eyebrow flex items-center gap-2">
              <Clock size={14} aria-hidden /> {workingHours.title}
            </p>
            <p className="mt-3 text-gray-600">{workingHours.days}</p>
            <p className="mt-1 font-condensed text-4xl font-bold">{workingHours.time}</p>
            <p className="mt-2 text-sm text-gray-500">{workingHours.note}</p>
          </div>

          <Link
            to="/branches"
            className="link-arrow mt-8"
          >
            View all branch details <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Contact;
