import React from "react";
// icons
import { FaTruck } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
function Item({ icon, title, desc }) {
  return <div className="flexb gap-3 p-4">
    <span className="bg-blue-200 text-2xl p-3 rounded-xl text-(--main-color)">
        {icon}
    </span>
    <span>
        <h2 className="font-bold pb-2">{title}</h2>
        <p>{desc}</p>
    </span>
  </div>;
}
const services = [
  {
    icon: <FaTruck />,
    title: "Global Express",
    desc: "Complimentary shipping on orders over $500",
  },
  {
    icon: <LuShieldCheck />,
    title: "Secured Checkout",
    desc: "Enterprise-grade encryption for every transaction.",
  },
  {
    icon: <LuCircleCheckBig />,
    title: "Lifetime Warranty",
    desc: "We stand by the craftsmanship of every piece.",
  },
];
function Services() {
  return (
    <div className="bg-(--bg-color) mt-20">
      <div className="container flexb flex-wrap py-10">
        {services.map((s)=>{
            return(
                <Item icon={s.icon} title={s.title} desc={s.desc}/>
            )
        })}
      </div>
    </div>
  );
}

export default Services;
