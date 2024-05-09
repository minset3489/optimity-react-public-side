import useFetch from "../composables/useFetch";
import { backendBaseUrl } from "../config/appConfig";

const VisionMission = () => {


    const {
        data: visionmission,
        isPending,
        error,
    } = useFetch(`${backendBaseUrl}/visionmission`);

    return ( <>
        <section>
            {error && <div>{error}</div>}
            { isPending || !visionmission ? (
                <div>Loading...</div>
            ) : 
            (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bgcoralwhitepink p-6">
                {
                    visionmission.map((data) => (
                        <div key={data.id} className="text-center">
                            <h1 className="!font-extralight !text-slate-600">{data.title}</h1>
                            <p className="!text-xl text-left p-6">{data.description}</p>
                        </div>
                    ))
                }
            </div>
            )}
        </section>
    </> );
}
 
export default VisionMission;