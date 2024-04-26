import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useFetch from "../composables/useFetch";

const HomeSolution = () => {
  const {
    data: solutions,
    isPending,
    error,
  } = useFetch("http://optimityback.htoomaungthait.xyz/solutions/");

  // Calculate the maximum number of items in the servicesupport array
  const maxSupportItemCount = solutions ? Math.max(
    ...solutions.map((solution) => solution.servicesupport.length)
  ) : 0;

  // Calculate the height based on the maximum number of items
  const maxItemHeight = maxSupportItemCount * 45; // Adjust 40 according to your design

  return (
    <section className="text-white">
      {error && <div>{error}</div>}
      {isPending || !solutions ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="text-center">
            <h3 className="mb-4">Our Solutions</h3>
          </div>
          <div className="grid grid-cols-auto-fit gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="text-start p-8 rounded-md bg-mydarkbg shadow-md mb-4"
                style={{
                  height: `${maxItemHeight + 160}px`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4 className="text-mycoral text-center border-b border-white border-opacity-20 md:line-clamp-2 mb-4">
                    {solution.title}
                  </h4>
                  {solution.servicesupport.map((servicesupport, index) => (
                    <div className="flex !text-base" key={index}>
                      <div>
                        <Icon
                          className="text-green-500 mr-1 mt-1"
                          icon="pajamas:check-circle"
                        />
                      </div>
                      {servicesupport}
                    </div>
                  ))}
                </div>
                <NavLink
                  className="text-center align-bottom mybutton !w-full md:w-auto"
                  to={`/solutions/${solution.id}`}
                >
                  Details...
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeSolution;
