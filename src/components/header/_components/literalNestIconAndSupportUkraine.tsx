import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

const LiteralNestIconAndSupportUkraine = () => {
    const router = useRouter()

    const handleLiteralNestIconClick = () => {
        router.push("/")
    }

    const handleSupportUkraineClick = () => {
        window.open("https://war.ukraine.ua/support-ukraine/", "_blank")
    }

    return (
        <div className="flex gap-2">
            <Image src="/icon/literalnest-icon.svg" alt={""} width={35} height={35} className="cursor-pointer"
                   onClick={handleLiteralNestIconClick}/>
            <div
                className="border-2 border-black rounded-[10px] px-6 py-2 w-[250px] text-[12px] cursor-pointer hover:bg-gray-400"
                onClick={handleSupportUkraineClick}>
                LiteralNestWeb stay with Ukraine
            </div>
        </div>
    );
};

export default LiteralNestIconAndSupportUkraine;