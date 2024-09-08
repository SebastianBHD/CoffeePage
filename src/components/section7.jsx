import Carousel from 'react-bootstrap/Carousel';
import TestimonialCard from './testimonialCard';
import '../App.css';

function CarouselFadeExample() {
    const test1 = "As the manager of Coffee Zone, I’m incredibly proud of the team we’ve built and the culture we’ve fostered. Our goal is not just to serve exceptional coffee, but to create a warm and inviting space where every customer feels at home. I’ve seen firsthand the dedication and passion of our employees, and it’s their hard work that drives our success. We constantly strive to innovate and improve, and the positive response from our community is a testament to our efforts. Managing Coffee Zone is not just a job; it’s a commitment to excellence and a shared love for coffee and community"
    const test2 = "Working at Coffee Zone has been an incredible experience. The team is like a family, and the camaraderie we share makes every shift enjoyable. I love connecting with our regular customers and seeing their smiles when they get their favorite cup of coffee. The shop’s commitment to quality and sustainability resonates with me, and I appreciate the opportunities for growth and learning that Coffee Zone provides. Plus, who doesn’t love being surrounded by the aroma of freshly brewed coffee every day?"
    const test3 = "Being a part of Coffee Zone’s team as a baker has been nothing short of fulfilling. The atmosphere here is vibrant and welcoming, which makes coming to work every day a pleasure. I take pride in knowing that our baked goods, from croissants to cakes, are crafted with the highest standards of quality. The support from my colleagues and the positive feedback from our customers make all the early mornings worth it. It’s amazing to see people enjoying the treats we pour our heart into making"
    return (
        <>
            <div className='flex flex-row justify-center text-center p-2'>
                <Carousel className="custom-indicators" slide={false}>
                    <Carousel.Item>
                        <TestimonialCard name="MR. JOHN DEO" rol="Cafe Manager" testimony={test1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestimonialCard name="Jamie, Barista" rol="Employee" testimony={test2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestimonialCard name="Alex, Baker" rol="Employee" testimony={test3} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default CarouselFadeExample;