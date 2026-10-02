import { Link } from "react-router-dom";
import { useDocumentTitle } from "../components/useDocumentTitle";
import { btnPrimary } from "../Data/homePageData";

function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <section className="container-page section flex flex-col items-center text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-3 text-5xl md:text-7xl">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600">The page you're looking for doesn't exist or has moved.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn btn-primary btn-lg">Back to home</Link>
        <Link to="/foods" className="btn btn-outline btn-lg">{btnPrimary.browseFoods}</Link>
      </div>
    </section>
  );
}

export default NotFound;
