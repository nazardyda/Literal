import React from 'react';
import ServiceBlock, {ServiceBlockProps} from "@/components/service/serviceBlock";

const services: ServiceBlockProps[] = [
    {
        title: "Web development",
        description: "We design unique digital products"
    },
    {
        title: "Telegram bot development",
        description: "We design unique digital products",
        bgColor: {bgColor: "bg-sea-green", hoverBgColor: "hover:bg-dark-sea-green"}
    },
    {
        title: "App development",
        description: "We design unique digital products"
    }
]


const Services = () => {
    return (
        <div className="flex w-full">
            {
                services.map((service, index) => <ServiceBlock key={index} {...service}/>)
            }
        </div>
    );
};

export default Services;