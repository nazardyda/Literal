import React from 'react';

export interface OpenOrCloseMobileMenuProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OpenOrCloseMobileMenu = (props: OpenOrCloseMobileMenuProps) => {
    const {setIsOpen} = props;

    return (<div onClick={() => setIsOpen( prev => !prev)}>open</div>)
};

export default OpenOrCloseMobileMenu;