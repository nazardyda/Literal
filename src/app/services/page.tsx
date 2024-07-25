import React from 'react';
import Services from "@/components/service/services";

const Page = () => {
    return (
        <div className="h-[100vh] w-full flex flex-col items-center">
            <div className="p-20">
                Our Services
            </div>
            <Services/>
        </div>
    );
};

export default Page;