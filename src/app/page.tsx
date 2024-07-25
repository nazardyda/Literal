import Services from "@/components/service/services";


export default function Home() {
    return (
        <div>
            <div className="h-[100vh] flex justify-between gap-2">
                <div>
                    <div className="h-full">
                        Image
                    </div>
                    <div>
                        We design unique digital products, write code and consult on digital transformation
                    </div>
                </div>
            </div>
            <Services/>
        </div>
    );
}
