import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

const Services = () => {
  const services = [
    {
      id: "1",
      title: "Design and Implementation of IT Solution",
      description:
        "Transform your business with our expertly crafted IT solutions. From inception to execution, we deliver tailored strategies that drive success. Harness the power of technology to propel your business forward.",
      icon: "solar:ruler-pen-bold",
    },
    {
      id: "2",
      title: "Field Engineering Services for International Telco and ISPs",
      description:
        "Our dedicated team of experts specializes in deploying cutting-edge solutions, ensuring unparalleled reliability and scalability for your network infrastructure. From initial design and deployment to ongoing maintenance and support, we prioritize efficiency and excellence, empowering your operations to thrive in today's dynamic digital landscape.",
      icon: "ic:baseline-engineering",
    },
    {
        id: "3",
        title: "Operation, Maintenance & Managed Services",
        description:
          "We specialize in Operation, Maintenance & Managed Services tailored to meet your unique needs. Our dedicated team of experts works tirelessly to optimize your IT infrastructure, minimizing downtime and maximizing productivity.",
        icon: "carbon:license-maintenance-draft",
      },
  ];

  return (
    <section className="text-center">
      <h3 className="mb-4">Our Services</h3>
      <div className="grid grid-cols-auto-fit gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center ">
        {services.map((service) => (
          <NavLink key={service.id} to="/services">
            <div className="text-center px-4 py-6 bgtransparent">
              <Icon
                className="text-5xl mb-4 mx-auto"
                icon={service.icon}
              />
              <h4 className="!text-center mb-4 line-clamp-2">{service.title}</h4>
              <p className="text-left line-clamp-5">{service.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Services;
