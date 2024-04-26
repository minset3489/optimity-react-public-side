import { Icon } from "@iconify/react";
import useFetch from "../composables/useFetch";

const CoreValues = () => {
    const {
        data: corevalues,
        isPending,
        error,
    } = useFetch("http://optimityback.htoomaungthait.xyz/corevalues");
    return ( <>
        <div className="mt-6 py-6 border-y border-white border-opacity-20">
            <h2 className="pb-6">Core Values</h2>
        {error && <div>{error}</div>}
        {isPending || ! corevalues ? <div>Loading...</div> :
            <div className="max-w-4xl m-auto">
                { corevalues.map((data) => (
                    <div key={data.id} className="flex text-lg">
                        <div>
                            <Icon
                            className="text-slate-600 mr-1 mt-1"
                            icon="mdi:tick-circle"
                            />
                        </div>
                        {data.value}
                    </div>
                ))}
            </div>
        }
            
        </div>
        
    </> );
}
 
export default CoreValues;