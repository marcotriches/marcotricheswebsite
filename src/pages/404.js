import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <>

    <Layout>
      <SEO title="404: Not found" />

      <div className="flex flex-wrap mx-auto content-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5 ">
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-full sm:w-1/2"
          src={abductionIllustration}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold mx-auto my-8 p-3 ">
          Sembra che la pagina che stai cercando non esisata...
        </h2>
      </div>
    </Layout>
    </>
  );
}

export default NotFoundPage;
