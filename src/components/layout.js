import PropTypes from "prop-types";
import React from "react";
import SEO from "../components/seo";
import Header from "./header";


function Layout({ children }) {

  return (
    <>
    <SEO keywords={[`escursioni`, `sentieri`, `itinerari`, ` trekking`, `montagna`]  } title="Marco Triches, guida ambientale escursionistica"/>

    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 pt-16 justify-center ">
        {children}
      </main>

      <footer className="bg-yellow-600">
        <nav className="flex justify-between w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5 mx-auto py-4 text-sm">
          <p className="text-white">
          © {new Date().getFullYear()}, {` `} Marco Triches
          </p>

          <div className=" border rounded-full text-white h-8 w-8 p-auto flex items-center justify-center border-white hover:text-black hover:bg-yellow-400 hover:border-transparent">
            <a
              className="font-bold text-2xl"
              href="https://www.facebook.com/marco.triches.376"
            >
              f
            </a>
          </div>
        </nav>
      </footer>
    </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
