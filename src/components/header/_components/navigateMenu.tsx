import React from 'react';
import HeaderTabItem, {HeaderTabItemProps} from "@/components/header/headerTabItem";
import {HeaderTab} from "@/components/header/header";

export const headerLeftTabs: HeaderTab[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Team",
        path: "/team"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "Contact us",
        path: "/contact",
    }
]

interface NavigateMenuProps extends Omit<HeaderTabItemProps, "tab">{
    className: string
}

const NavigateMenu = (props: NavigateMenuProps) => {
    const {className, onClick} = props

    return (
        <div className={className}>
            {headerLeftTabs.map(tab => <HeaderTabItem tab={tab} onClick={onClick}/>)}
        </div>
    );
};

export default NavigateMenu;