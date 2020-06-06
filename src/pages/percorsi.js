import React from "react";
import {Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";


function PercorsiPage() {
  
  const data = useStaticQuery(graphql`
        query {
           allPrismicPercorsi(sort: { fields: dataString, order: DESC } ){
            
              edges {
                    node {
                      data {
                        titolo{
                          text
                        }
                        slug {
                          text
                        }
                        gpx {
                            text
                        }
                      } 
                    }   
            }
          }  
        }
    `)
  
  return (
   
   <Layout>
     
     <div className="flex w-10/12 md:max-w-6xl flex-wrap md:justify-center mx-auto mb-8">
        { data.allPrismicPercorsi.edges.map((edge) => {
        return (
          <div className="md:w-1/3 mb-4 p-4">
           <Link to={`/percorsi/${ edge.node.data.slug.text}`}> 
            <div className="font-bold text-md leading-tight">{edge.node.data.titolo.text}</div>
           </Link>
           <iframe className="w-full h-64 my-4" frameBorder="0"marginHeight="0" marginWidth="0" src={edge.node.data.gpx.text}></iframe>
          </div>
         )
        })
        }
      </div>
    </Layout>
  );
}

export default PercorsiPage;
