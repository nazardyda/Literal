'use client';
import React from 'react';
import LiteralNestIconAndSupportUkraine from "@/components/header/_components/literalNestIconAndSupportUkraine";
import NavigateMenu from "@/components/header/_components/navigateMenu";
import MediaQuery from "react-responsive";
import NavigateMenuPhone from "@/components/header/_components/navigateMenuPhone";
import OpenOrCloseMobileMenu from "@/components/header/_components/openOrCloseMobileMenu";

export interface HeaderTab {
    title: any
    path: string
    className?: string
}

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    if (isOpen) {
        return (<NavigateMenuPhone setIsOpen={setIsOpen}/>)
    }

    return (
        <div className="flex justify-between px-6 py-3 sticky border-b-2 border-black mb-2">
            <LiteralNestIconAndSupportUkraine/>
            <MediaQuery minWidth={768}>
                <NavigateMenu className="flex gap-12"/>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <OpenOrCloseMobileMenu setIsOpen={setIsOpen}/>
            </MediaQuery>
        </div>
    );
};

export default Header;