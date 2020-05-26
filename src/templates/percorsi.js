
import React from 'react'
import { graphql } from "gatsby"	
import Layout from "../components/layout";


export const query = graphql`
   query ($slug: String!){
    prismicPercorsi(slugs: { eq: $slug }){

        data{
           
            titolo{
                text
            }
            gpx{
                text
            }   

        }
       
    }

}`

		
const Percorsi = props => {
    
    const {data} = props;

      return (

        <Layout>
            
            <div className="w-10/12 mx-auto">
                <h1 className="text-5xl font-bold text-xl leading-tight">{data.prismicPercorsi.data.titolo.text}</h1>
                    <hr/> 
                    <iframe className="w-full h-screen my-8" frameBorder="0"marginHeight="0" marginWidth="0" src={data.prismicPercorsi.data.gpx.text}></iframe>
            </div>     
        </Layout>

    )
}


export default Percorsi