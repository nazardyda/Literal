import React from 'react';
import {HeaderTab} from "@/components/header/header";
import {usePathname, useRouter} from "next/navigation";

export interface HeaderTabItemProps {
    tab: HeaderTab,
    onClick?: () => void
}

const HeaderTabItem = (props: HeaderTabItemProps) => {
    const {tab, onClick} = props
    const router = useRouter()
    const pathName = usePathname()
    const fontBolt = pathName === tab.path ? 'font-bold' : 'font-medium'

    const handleClick = () => {
        onClick?.()
        router.push(tab.path)
    }

    return (
        <div onClick={handleClick}
             className={`cursor-pointer text-[14px] ${fontBolt} self-center hover:text-[#cc99ff] ${tab.className}`}>
            {tab.title}
        </div>
    );
};

export default HeaderTabItem;