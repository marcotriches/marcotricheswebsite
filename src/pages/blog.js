import React from "react";
import {Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";


function BlogPage() {
  
  const data = useStaticQuery(graphql`
        query {
           allPrismicBlog(sort: { fields: dataString, order: DESC } ){
            
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
                       
                        immagine {
                          url
                          localFile {
                            url
                          }
                        }  
                       
                      }
                    }  
              
            }
          }  
        }
    `)
  
  return (
   
   <Layout>
        { data.allPrismicBlog.edges.map((edge) => {
        return (
            <div className="flex w-10/12 md:w-full flex-wrap md:justify-center mx-auto -mb-4">
                <div className="w-1/3 mb-4 ">    
                    <div className="font-bold text-xl text-black hover:underline mb-2">
                        <Link to={`/blog/${ edge.node.data.slug.text}`}>{edge.node.data.titolo.text}</Link>
                    </div>
                    <img className="w-full h-64 object-cover object-center" src={edge.node.data.immagine.url} alt={edge.node.data.titolo.text}/>
                </div>
            </div>
        )
        })}
    </Layout>
  );
}

export default BlogPage;
