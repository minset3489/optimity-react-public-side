import useFetch from "../composables/useFetch";

const VisionMission = () => {

    const {
        data: visionmission,
        isPending,
        error,
    } = useFetch("http://localhost:3000/visionmission");

    return ( <>
        <section>
            {error && <div>{error}</div>}
            { isPending || !visionmission ? (
                <div>{isPending}</div>
            ) : 
            (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bgcoralwhitepink p-6">
                {
                    visionmission.map((data) => (
                        <div key={data.id} className="text-center">
                            <p className="text-3xl md:text-5xl font-light">{data.title}</p>
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