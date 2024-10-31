import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrewDetail = () => {
    let params = useParams();
    const url = `https://api.openbrewerydb.org/v1/breweries/${params.id}`
    const options = {
        method: 'GET',
        // authorization: API_KEY,
    }
    const [details, setDetails] = useState(null);
    useEffect(() => {
        const getDetail = async () => {
            const response = await fetch(url, options);
            const data = await response.json();
            setDetails(data);
        }
        getDetail().catch(console.error);
    }, [details, url])

    return (

            <div>
            {details && (
                <div>
                    <h1>{details.name}</h1>
                    <h3> {details.address_1}</h3>
                    {details.website_url && (<h3>details.website_url</h3>)}
                    <br></br>
                    <p>Phone: {details.phone}</p>
                </div>
            )
                }
            </div>
    )
};
export default BrewDetail;