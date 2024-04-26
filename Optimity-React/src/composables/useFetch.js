import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(()=>{
            fetch(url, {signal:abortCont.signal})
            .then(response => {
                if(!response.ok){
                    throw Error("could not fetch the data from the resource")
                }
                return response.json()
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                  console.log('fetch aborted')
                } 
                else {
                  setIsPending(false);
                  setError(err.message);
                }
            })
        },100);

         // abort the fetch
        return () => abortCont.abort();
    }, [url])

    return{data,isPending,error}
    
}


export default useFetch;