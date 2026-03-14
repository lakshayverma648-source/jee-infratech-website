import classNames from "classnames"
import Image from "next/image"

const ChooseUsTwo = ({ className }) => {
    return (
        <section className="section choose_us">
            <div className={`container flex flex-col items-center sm:py-25 py-15 ${classNames(className)}`}>
                
                <span className="section_tag tag w-fit animate">
                    WHY CHOOSE US
                </span>

                <h3 className="section_tit mt-4 heading3 text-center animate">
                    Why Jee Infra Tech Solutions is the Right Choice
                </h3>

                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">
                    We deliver dependable civil repair, fabrication, and maintenance services with
                    professionalism, efficiency, and attention to detail.
                </p>

                <div className="choose_us_content flex max-lg:flex-col items-center gap-15 mt-12">

                    {/* LEFT SIDE */}
                    <ul className="choose_us_list flex flex-col lg:gap-12 gap-8 max-lg:w-full">

                        <li className="choose_us_item flex flex-col lg:items-end group animate animate_right">
                            <span className="icon-pencil text-6xl text-orange duration-300"></span>
                            <strong className="block mt-5 heading5">
                                Customized Solutions
                            </strong>
                            <p className="mt-3 text-variant1 lg:text-right">
                                We understand that every project is different. Our team provides
                                tailored solutions for civil repairs, fabrication work, plumbing,
                                and maintenance to suit your specific requirements.
                            </p>
                        </li>

                        <li className="line flex-shrink-0 w-full h-px bg-outline"></li>

                        <li className="choose_us_item flex flex-col lg:items-end group animate animate_right">
                            <span className="icon-timer text-6xl text-orange duration-300"></span>
                            <strong className="block mt-5 heading5">
                                Timely Execution
                            </strong>
                            <p className="mt-3 text-variant1 lg:text-right">
                                Our experienced team ensures every project is completed on time
                                while maintaining high standards of workmanship and safety.
                            </p>
                        </li>

                    </ul>

                    {/* CENTER IMAGE */}
                    <div className="choose_us_bg flex-shrink-0 lg:w-1/3 sm:w-3/4 w-full">
                        <Image
                            width={2000}
                            height={2000}
                            src="/images/components/choose_us2.png"
                            alt="choose_us"
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <ul className="choose_us_list flex flex-col lg:gap-12 gap-8 max-lg:w-full">

                        <li className="choose_us_item group animate animate_left">
                            <span className="icon-reward text-6xl text-orange duration-300"></span>
                            <strong className="block mt-5 heading5">
                                Quality Workmanship
                            </strong>
                            <p className="mt-3 text-variant1">
                                We focus on delivering reliable and high-quality civil repair
                                and maintenance services using the best materials and proven
                                techniques.
                            </p>
                        </li>

                        <li className="line flex-shrink-0 w-full h-px bg-outline"></li>

                        <li className="choose_us_item group animate animate_left">
                            <span className="icon-hand-coin text-6xl text-orange duration-300"></span>
                            <strong className="block mt-5 heading5">
                                Transparent Pricing
                            </strong>
                            <p className="mt-3 text-variant1">
                                Our pricing is clear and transparent with no hidden charges,
                                helping you plan your maintenance and infrastructure work with confidence.
                            </p>
                        </li>

                    </ul>

                </div>
            </div>
        </section>
    )
}

export default ChooseUsTwo