import { useDocumentTitle } from "./useDocumentTitle";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

function PageHeader({ title, subtitle }: PageHeaderProps) {
  useDocumentTitle(title);

  return (
    <header className="border-b border-gray-200 bg-gray-50">
      <div className="container-page py-10 md:py-14">
        <h1 className="display text-5xl md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-xl text-base text-gray-600 md:text-lg">{subtitle}</p>}
      </div>
    </header>
  );
}

export default PageHeader;
