import { Separator } from "@/components/ui/separator";
import callSVG from "../assets/call.svg";
import moneySVG from "../assets/money.svg";
import shippingSVG from "../assets/shipping.svg";

function Section5() {
    return (
        <>
            <div className="flex flex-row items-center justify-center text-center p-20">
                <div>
                    <div className="space-y-1">
                        <div className="flex h-64 items-center space-x-4 text-xl">
                            <div className="grid justify-center items-center text-center">
                                <div className="flex items-center justify-center">
                                    <img src={callSVG} alt="Call icon" className="h-8 w-8 lg:w-12 xl:w-12 md:w-12 lg:h-12 xl:h-12 md:h-12" />
                                </div>
                                <p className="text-md lg:text-2xl xl:text-2xl md:text-2xl font-bold">
                                    24 x 7 Free Suport
                                </p>
                                <p className="text-sm lg:text-xl xl:text-xl md:text-xl">
                                    There Many Variations Passages Lorem But Majority Have ...
                                </p>
                            </div>
                            <Separator orientation="vertical" />
                            <div className="grid justify-center items-center text-center">
                                <div className="flex items-center justify-center">
                                    <img src={moneySVG} alt="Call icon" className="h-8 w-8 lg:w-12 xl:w-12 md:w-12 lg:h-12 xl:h-12 md:h-12" />
                                </div>
                                <p className="text-md lg:text-2xl xl:text-2xl md:text-2xl font-bold">
                                    Money Back Guarantee
                                </p>
                                <p className="text-sm lg:text-xl xl:text-xl md:text-xl">
                                    There Many Variations Passages Lorem But Majority Have ...
                                </p>
                            </div>
                            <Separator orientation="vertical" />
                            <div className="grid justify-center items-center text-center">
                                <div className="flex items-center justify-center">
                                    <img src={shippingSVG} alt="Call icon" className="h-8 w-8 lg:w-12 xl:w-12 md:w-12 lg:h-12 xl:h-12 md:h-12" />
                                </div>
                                <p className="text-md lg:text-2xl xl:text-2xl md:text-2xl font-bold">
                                    Free World Shipping
                                </p>
                                <p className="text-sm lg:text-xl xl:text-xl md:text-xl">
                                    There Many Variations Passages Lorem But Majority Have ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section5;
