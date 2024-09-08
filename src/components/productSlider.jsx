import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import ItemCard from "./itemcard";
import cafe1 from "../assets/cafe1.png";
import cafe2 from "../assets/cafe2.png";
import cafe3 from "../assets/cafe3.png";
import cafe4 from "../assets/cafe4.png";
import cafe5 from "../assets/cafe5.png";
import cafe6 from "../assets/cafe6.png";

function Section3({ title}) {
    return (
        <>
            <div className="grid justify-center items-center text-center gap-10 pb-10">
                <h1 className="lg:text-5xl xl:text-5xl text-3xl font-bold">{title}</h1>
                <div className="w-full overflow-hidden cursor-grab">
                    <Carousel className="w-full">
                        <CarouselContent className="py-10 px-2">
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe1}
                                productName="Coffee STARBUCKS"
                                price="$5.00"
                            /></CarouselItem>
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe2}
                                productName="Coffee Azahar"
                                price="$10.00"
                            /></CarouselItem>
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe3}
                                productName="Coffee CampoClaro"
                                price="$8.00"
                            /></CarouselItem>
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe4}
                                productName="Coffee Cabrales"
                                price="$16.00"
                            /></CarouselItem>
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe5}
                                productName="Coffee Chana"
                                price="$16.00"
                            /></CarouselItem>
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe6}
                                productName="Coffee Senior"
                                price="$11.00"
                            /></CarouselItem>
                            <CarouselItem className="lg:basis-1/4 xl:basis-1/4 md:basis-1/3 sm:basis-1/2"><ItemCard
                                img={cafe1}
                                productName="Coffee STARBUCKS"
                                price="$5.00"
                            /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
                        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Section3;