import Layout from '../components/layout'
import React, {useState, useEffect} from "react"
import {graphql, useStaticQuery} from "gatsby"

const UpdateAPI = () => {

    const [starsCount, setStarsCount] = useState(0)
    useEffect(() => {
        async function findError(){
            try {
                const response = await fetch(`https://localhost:44399/api/listitems`);
    
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
    
                const result = await response.json();
                setStarsCount(result[0].name);
                console.log(result)
            } catch(err) {
                setStarsCount("Didn't work");
            }
        }
        findError()
    }, [])

    return(
        <section>
            <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
            <Layout pageTitle="UpdateAPI"> 
            
             <p1> Update the ASP.net api on this page!</p1></Layout>
        </section>
    )
}

export const Head = () => <title>UpdateAPI</title>

export default UpdateAPI