import { testimonials } from "../assets/asset"
const TestimonialSection=()=>{
     return (
        <section className="py-14 bg-black ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto text-center">
                    <h3 className="text-white text-3xl font-mono sm:text-4xl">
                Testimonials
                    </h3>
                    <p className="mt-3 text-white text-2xl sm:text-6xl  font-serif">
                       Happy Customers
                    </p>
                    <p className="mt-3 text-white text-md sm:text-lg  font-sans">
                    Don’t take it from us. Check out the glowing testimonials from our satisfied customers.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}




   
export default TestimonialSection