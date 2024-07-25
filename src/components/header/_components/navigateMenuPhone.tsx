import React, {useEffect} from 'react';
import LiteralNestIconAndSupportUkraine from "@/components/header/_components/literalNestIconAndSupportUkraine";
import NavigateMenu from "@/components/header/_components/navigateMenu";
import OpenOrCloseMobileMenu, {OpenOrCloseMobileMenuProps} from "@/components/header/_components/openOrCloseMobileMenu";

const NavigateMenuPhone = (props: OpenOrCloseMobileMenuProps) => {
   const {setIsOpen} = props

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, []);

    const handleClickOnSection = () => {
        setIsOpen(false)
    }

    return (
        <div className="h-[100vh] bg-dark-purple text-white px-6 py-3">
            <div className="flex justify-between">
                <LiteralNestIconAndSupportUkraine/>
                <OpenOrCloseMobileMenu setIsOpen={setIsOpen}/>
            </div>
            <NavigateMenu className="h-full flex flex-col items-center gap-5 justify-center"  onClick={handleClickOnSection}/>
        </div>
    );
};

export default NavigateMenuPhone;