import React from "react";
import Layout from "../components/layout";
import message from "../images/message.svg";

function ContactPage() {
  return (
    <>
    <Layout>

      <section className="mb-8 flex m-auto sm:justify-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5">
        <form  name="contact-form"
            method="POST"
            data-netlify="true"
            action="/succes"
            className="w-full">

          <div className="flex flex-wrap ">
            <div className="w-3/4 ">
              <h2 className=" mb-2 leading-loose text-5xl font-bold text-gray-700">
                Contattami!
              </h2>
            </div>
              <div className="w-1/4 ">         
                <img className="float-right fill-current text-gray-500 w-24" src={message} alt=""/>
              </div>
          </div>     
          <label
            className="block mb-2 text-xs font-bold uppercase"
           
          >
            Info
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            name="first-name"
            placeholder="Nome e Cognome"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            
          >
            Messaggio
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            name="message"
            placeholder="Srivimi qualcosa..."
            rows="8"
          />

    
          <button type="submit" className="w-1/4 text-sm md:text-base ml-auto right-0 h-12 my-auto bg-yellow-600 hover:bg-transparent text-black hover:text-gray-700 font-semibold py-2 px-2  sm:px-4 border border-yellow-600 rounded focus:outline-none ">
             Invia
          </button>
        </form>
      </section>
    </Layout>
    </>
  );
}

export default ContactPage;
