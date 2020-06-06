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
                        articolo {
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
     
     <div className="flex w-10/12 md:max-w-6xl flex-wrap md:justify-center mx-auto mb-8">
     <div className="w-full text-3xl font-extrabold p-4">Blog</div>
        { data.allPrismicBlog.edges.map((edge) => {
        return (
            
                <div className="md:w-1/3 mb-4 p-4">    
                    <Link to={`/blog/${ edge.node.data.slug.text}`}>
                      <img className="w-full h-64 object-cover object-center rounded-sm" src={edge.node.data.immagine.url} alt={edge.node.data.titolo.text}/>
                    </Link>
                    <div className="font-bold text-xl text-black hover:underline mt-1 mb-2">
                        <Link to={`/blog/${ edge.node.data.slug.text}`}>{edge.node.data.titolo.text}</Link>
                    </div>
                    <div className="text-gray-500 h-24 overflow-hidden">{edge.node.data.articolo.text}</div>
                </div>
          
        )
        })}
        </div>
    </Layout>
  );
}

export default BlogPage;
