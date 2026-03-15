import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutOne = () => {
    return (
        <section className="section about sm:py-25 py-15">
            <div className="container flex max-lg:flex-col items-center xl:gap-20 gap-10">
                <div className="about_img flex-shrink-0 lg:w-[48%] sm:w-2/3 w-full animate animate_right">
                    <Image
                        width={1000}
                        height={1000}
                        src="/images/components/about1.jpg"
                        alt="Reliable Civil Repairs & Infrastructure Solutions"
                        layout="responsive"
                        priority={true}
                    />
                </div>
                <div className="about_content">
                    <span className="section_tag tag animate">about us</span>
                    <h3 className="section_tit mt-4 heading3 animate">
                        Reliable Civil Repairs & Infrastructure Solutions
                    </h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">
                      At Jee Infratech Solutions, we are committed to delivering dependable civil repair and maintenance services with quality workmanship and timely execution. Serving Delhi, Noida, and Gurugram, we provide comprehensive solutions tailored to residential, commercial, and corporate sites.

With a skilled team and a customer-first approach, we ensure lasting results, superior materials, and complete peace of mind—no matter the size or complexity of the project.
                    </p>
                    <ul className="about_benefit flex max-sm:flex-col gap-7.5 gap-y-5 mt-10">
                        <li className="animate" style={{"--i": 1}}>
                            <Icon.Trophy className="text-6xl" />
                            <strong className="block mt-5 heading6">
                                Experienced, Skilled Team
                            </strong>
                            <p className="mt-3 text-variant1">
                               Our professionals bring hands-on expertise across civil, electrical, plumbing, fabrication, and finishing works—ensuring precision, safety, and high standards in every assignment.
                            </p>
                        </li>
                        <li className="animate" style={{"--i": 2}}>
                            <Icon.Headset className="text-6xl" />
                            <strong className="block mt-5 heading6">End-to-End Support</strong>
                            <p className="mt-3 text-variant1">
                               From material supply to on-site execution, we provide complete infrastructure and maintenance support with responsive service and reliable coordination.
                            </p>
                        </li>
                    </ul>
                    <ul className="about_btn flex flex-wrap gap-8 gap-y-6 mt-10">
                        <li className="animate" style={{"--i": 1}}>
                            <Link href="/pages/about-us" className="btn">
                                About Us
                            </Link>
                        </li>
                        <li className="animate" style={{"--i": 2}}>
                            <a href="tel:+91 9310125253" className="flex items-center gap-3 group">
                                <span className="flex items-center justify-center w-14 h-14 border-2 border-orange duration-400 group-hover:bg-orange group-hover:text-white">
                                    <Icon.PhoneCall className="text-3xl" />
                                </span>
                                <div>
                                    <span className="text-variant1">Call Us Now:</span>
                                    <strong className="heading6 block mt-0.5">+91 9310125253</strong>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default AboutOne;
