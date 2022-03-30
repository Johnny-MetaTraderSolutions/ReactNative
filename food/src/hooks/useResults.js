import yelp from "../api/yelp";
import { useState,useEffect } from "react";

export default()=>{
    const onSearchStart = (term) => {
        yelp.get("/search", {
            params: { limit: 50, term: term, location: "sydney" },
        })
            .then((res) => {
                setResults(res.data.businesses);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [results, setResults] = useState([]);

    useEffect(()=>{
        onSearchStart("pasta")
    },[])

    return [results,onSearchStart]
}