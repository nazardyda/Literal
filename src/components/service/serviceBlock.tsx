import React from 'react';

interface ServiceBlockBgColor{
    bgColor: string,
    hoverBgColor: string
}


export interface ServiceBlockProps {
    title: string
    description: string
    bgColor?: ServiceBlockBgColor
}

const ServiceBlock = (props: ServiceBlockProps) => {
    const {title, description, bgColor = {bgColor: 'bg-lilac', hoverBgColor: 'hover:bg-dark-purple'}} = props

    return (
        <div className={`flex items-center gap-3 w-1/3 cursor-pointer p-4 ${bgColor.bgColor} ${bgColor.hoverBgColor} text-white`}>
            <div>
                Image
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceBlock;