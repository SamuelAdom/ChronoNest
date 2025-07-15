import {features} from '../assets/asset'
export default () => {


    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              
                <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <div className="w-12 h-12  flex items-center justify-center">
                                       <img src={item.icon} alt="" />
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}