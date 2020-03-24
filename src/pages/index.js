import React from "react";
import {Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import indexImgbg from "../images/index.jpg";
import indexImg1 from "../images/index-1.jpg";
import indexImg2 from "../images/index-2.jpg";
import indexImg3 from "../images/index-3.jpg";
import indexImg4 from "../images/index-4.jpg";
import indexImg5 from "../images/index-5.jpg";
import indexImg6 from "../images/index-6.jpg";
import indexImg7 from "../images/index-7.jpg";
import indexImg8 from "../images/index-8.jpg";
import indexImg9 from "../images/index-9.jpg";
import indexImg10 from "../images/index-10.jpg";
import indexImg11 from "../images/index-11.jpg";
import indexImg12 from "../images/index-12.jpg";
import distanza from "../images/distance.svg";
import clouds from "../images/clouds.png";
import moment from 'moment';
import 'moment/locale/it';


function IndexPage() {
  
  const data = useStaticQuery(graphql`
        query {
           allPrismicEscursioni(sort: { fields: dataString, order: DESC } ){
            
              edges {
                    node {
                      id
                      slugs

                      data{
                        titolo {
                          text
                        }
                        slug {
                          
                            text
                        }
                        orario {
                          text
                        }
                        km 
                        percorrenza 
                        luogo {
                          latitude
                          longitude
                        }
                        immagine {
                          url
                          localFile {
                            url
                          }
                        }  
                        descrizione {
                          html
                        }
                        data(
                          formatString: "MM DD YYYY"
                          locale: "it-IT"
                          )
                      }
                    }  
              
            }
          }  
        }
    `)
  


  return (

   
<Layout >

<div className="relative bg-cover bg-center h-screen bg-fixed -mt-24 z-0 flex items-center " style={{ backgroundImage:`url(${indexImgbg})` }}>

<h1 className="w-4/5 mx-auto text-4xl text-white  font-bold leading-relaxed"><span className="font-serif text-5xl ">Marco Triches</span>, <br/> guida ambientale escursionistica.<br/> <span className="italic font-semibold">Giri, sentieri, itinerari, rifugi, trekking, escursioni, montagna.</span></h1>
{/* <img className="absolute inset-x-0 bottom-0 w-full" src={clouds} alt=""/>  */}
</div>

<div className="text-3xl font-bold mt-12 mb-12 w-2/3 mx-auto" >
  Percorsi mediterranei, escursionismo alpino
</div>
<div className=" flex w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5 mx-auto flex-wrap md:justify-center ">
    { data.allPrismicEscursioni.edges.map((edge) => {
      const todayYear = new Date().getFullYear();
      const todayMonth = new Date().getMonth()+1;
      const todayDay = new Date().getDate();
      moment.locale("it");
      var localLocale = moment();
      // const dateEsc = moment(datt, 'DD MMMM YYYY', "it-IT").format("DD MM YYYY");
     
      var currentDate = String(todayMonth) + " " +String(todayDay)+ " " + String(todayYear)
      var excDate = String(edge.node.data.data);
      
      
        return (
          <>
          <div key={edge.node.id} className="max-w-sm rounded overflow-hidden shadow-lg m-auto my-2">
            <img className="w-full h-64 object-cover object-center" src={edge.node.data.immagine.url} alt={edge.node.data.titolo.text}/>
            <div className="px-6 py-4">
            { new Date(currentDate).getTime() < new Date(excDate).getTime() ?
            <div className="font-bold text-xl text-black hover:underline mb-2"><Link to={`/escursioni/${edge.node.data.slug.text}`}>{edge.node.data.titolo.text}</Link></div> :
            <div className="font-bold text-xl text-gray-700 mb-2">{edge.node.data.titolo.text}</div> 
             }
            <hr/>
              <div className="flex py-3" >
              <div className="sm:w-4/5 text-gray-700 ">
                <p className="text-base uppercase">
               <strong>data:</strong> <span className="bg-red-400 p-1">{moment(excDate, 'MM DD YYYY').format("ddd, DD MMM YYYY")}</span>
                </p>
                <p className="text-base">
                <strong>Ritrovo alle ore:</strong> {edge.node.data.orario.text}
                </p>
              </div>
                  <div className=" hidden sm:inline-block py-2 mr-0"> <Link to={`/escursioni/${edge.node.data.slug.text}`}> <p className={`${ new Date(currentDate).getTime() < new Date(excDate).getTime() ? " hover:text-purple-700  text-purple-500 "  : "text-purple-300 cursor-default hidden" } float-right  p-1"`}><strong className="text-xl leading-relaxed">+</strong> info </p></Link></div>
              </div>
              <hr/>
              <div className="w-full py-2 justify-center text-purple-400 hover:underline sm:hidden">+ info</div>
              <hr className="sm:hidden"/>
              <div className="flex py-2"  >   
                <img className="fill-current text-gray-500 w-1/6 h-1/5 hidden sm:inline-block" src={distanza} alt=""/>
                <div className="sm:m-auto">
                  <h6>Km: {edge.node.data.km}</h6>
                  <hr className="my-2"/>
                  <h6>Percorrenza: {edge.node.data.percorrenza}</h6>
                </div>
                
                <button className={`${ new Date(currentDate).getTime() < new Date(excDate).getTime() ? "hover:bg-transparent hover:text-gray-700 "  : "opacity-50 cursor-default" } w-auto text-sm md:text-base ml-auto right-0 h-12 my-auto bg-yellow-600 text-black font-semibold py-2 px-2  sm:px-4 border border-yellow-600 rounded focus:outline-none`}>
                { new Date(currentDate).getTime() < new Date(excDate).getTime() ?  <a href={`mailto:marcotriches@gmail.com?subject=Prenotazione-escursione ${edge.node.data.titolo.text}  ${edge.node.data.data}`}>
          Prenota</a> : "Prenota" }
                </button>
                
              </div> 
            </div>
            {/* <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div> */}
          </div>
          </>
        )
    })}
</div> 

    <hr className="mt-12"/>
   

    <div className="flex flex-col flex-1 justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full"> 
      <section className="text-center">
    
        <div className=" text-3xl font-bold mt-6 mb-6" >
          <h2>Galleria</h2>
        </div>

        <div className="flex flex-wrap  m-auto">
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg1} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg2} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg3} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg4} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg5} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg6} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg7} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg8} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg9} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg10} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg11} alt="gallery image"/>
            </div>
            <div className="w-full sm:w-1/2 md:w-64 m-auto my-3">
              <img className="w-full h-64 object-cover object-center" src={indexImg12} alt="gallery image"/>
            </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default IndexPage;
