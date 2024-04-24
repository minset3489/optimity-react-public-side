import { Outlet } from "react-router-dom"

const SolutionLayout = () => {
    return ( 
<section className="text-white ">
    <h1  className="!mb-0 !pb-0">Benefits We Offer</h1>
    
    <Outlet />
</section>

     );
}
 
export default SolutionLayout;