import { useEffect, useState } from "react";

export function useFetch (url:string) {

    const [data, setData] =useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState();

    async function fetchData() {
        try{
            const response = await fetch(url)
            if(!response.ok) {
                throw new Error("Network response not ok!")
            }
            const json = await response.json();
            setData(json)
            setIsLoading(false)
        }
        catch (err){
            setIsError(err)
        }
    }


useEffect(()=>{
    fetchData()

}, [url])

return {data, isLoading, isError}

}


