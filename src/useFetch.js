import { useState , useEffect } from "react";

const useFetch = (url) => {

    const [data , setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null);
    

    useEffect(() => {
        
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return res.json(); //parses the res object into a json object
            })
            .then(data => { //this will fire once above 'then' function is executed i.e. once res is fully received
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);

            })
    } , [url])

    return {data , isPending , error};
}


export default useFetch;