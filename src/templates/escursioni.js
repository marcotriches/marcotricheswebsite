
import React from 'react'
import { graphql } from "gatsby"	
import Layout from "../components/layout";


export const query = graphql`
   query ($slug: String!){
    prismicEscursioni(slugs: { eq: $slug }){

        data{
            
            titolo{
                text
            }
            descrizione{
                html
            }
            luogo {
                latitude
                longitude
            }
            slug{
                text
            }
            data(
                formatString: "DD MMMM YYYY"
                locale: "it-IT"
            )
            orario {
                text
            }
            km
            percorrenza
            

        }
       
    }

}`

		
const Escursioni = props => {
    
    const {data} = props;

      return (

        <>
        <Layout>
            
            <div className="flex m-auto  sm:justify-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5">
                <div>
                    <h1 className="text-5xl font-bold text-xl leading-tight">{data.prismicEscursioni.data.titolo.text}</h1>
                    <hr/>
                    <div className="flex py-3 w-full" >
                        <div className="w-5/6 text-gray-700">
                            <p className="text-base uppercase">
                            <strong>data:</strong> <span className="bg-red-400 p-1">{data.prismicEscursioni.data.data}</span>
                            </p>
                            <p>
                            <strong>Ritrovo alle ore:</strong> {data.prismicEscursioni.data.orario.text}
                            </p>
                            <p>Km: {data.prismicEscursioni.data.km} | Percorrenza: {data.prismicEscursioni.data.percorrenza} </p>
                        </div>
                        <div className="w-1/6 my-auto right-0">
                        <button className="float-right h-12 bg-yellow-600 hover:bg-transparent text-sm sm:text-base text-white hover:text-gray-700 font-semibold items-center px-2 sm:py-2 border border-yellow-600 rounded focus:outline-none">
                                Prenota
                        </button>
                        
                        </div>
                    </div>
                        <hr/>

                    
                    <article className="font-normal text-normal my-8" dangerouslySetInnerHTML={{ __html: data.prismicEscursioni.data.descrizione.html }} />
                    
                    <div className="w-full">
                        <div>
                        <iframe className="w-full h-screen my-8" frameBorder="0"marginHeight="0" marginWidth="0" src={`https://maps.google.com/maps?q=${data.prismicEscursioni.data.luogo.latitude},${data.prismicEscursioni.data.luogo.longitude}&z=8&output=embed&iwloc=0`}></iframe>
                        </div>
                    </div>
                    
                </div>

            </div>     
        </Layout>
        </>
    )
}


export default Escursioni