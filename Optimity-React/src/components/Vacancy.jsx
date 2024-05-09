
import useFetch from "../composables/useFetch";
import { backendBaseUrl } from "../config/appConfig";

const Vacancy = () => {
    const {
        data: vacancy,
        isPending,
        error,
    } = useFetch(`${backendBaseUrl}/vacancy`);

    return ( <>
    
        <section className="bgcoralwhitepink max-w-4xl ">
        {error && <div>{error}</div>}

        {isPending || !vacancy ?<div>Loading...</div> : 
        <div>
            <h1 className="!font-extralight !text-slate-600">
                Vacancy Announcement!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center bg">
                {vacancy.map((data)=> (
                    <div key={data.id} className="bgtransparent p-6">

                    <h4 className="!text-3xl mb-4">{data.title}</h4>
                    <h4 className="underline my-2">Education</h4>
                    <p className="text-xl text-left">{data.education}</p>
                    <h4 className="underline my-2">Experience</h4>
                    <p className="text-xl text-left">{data.experience}</p>

                    
                </div>
                ))}
            </div>
        </div>
        }
            
        </section>
    </> );
}
 
export default Vacancy;