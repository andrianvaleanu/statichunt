import Base from "@layouts/Baseof";
import Link from "next/link";

const notFound = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-6">
              <div className="flex min-h-[40vh] items-center justify-center">
                <div className="text-center">
                  <span className="mb-4 block text-[20rem] font-bold leading-none text-dark dark:text-darkmode-dark">
                    404
                  </span>
                  <h1 className="mb-4 text-h2">
                    We Apologize For The Inconvenience
                  </h1>
                  <p className="mb-8">
                    The page you have requested cannot be found! Please consider
                    navigating to our Homepage to find what you are looking for.
                  </p>
                  <Link href="/" className="btn btn-primary">
                    Go Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default notFound;
