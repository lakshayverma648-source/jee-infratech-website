import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import CtaOne from "@/components/Sections/Cta/CtaOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import serviceData from "@/data/service/data.json";
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import processData from "@/data/process/data.json";
import ProcessOne from "@/components/Sections/Process/ProcessOne";
import CounterOne from "@/components/Sections/Counter/CounterOne";
import ChooseUsOne from "@/components/Sections/ChooseUs/ChooseUsOne";
import BannerOne from "@/components/Sections/Banner/BannerOne";
import ProjectOne from "@/components/Sections/Project/ProjectOne";
import Link from "next/link";

export default function Home() {
  return (
    <LayoutOne>
      <SliderOne />
      <CtaOne />
      <AboutOne />

      {/* Services Section */}
<section className="bg-surface pt-16 pb-10">
  <div className="container">
    <ServiceOne
      className={'bg-surface'}
      data={serviceData}
      start={0}
      limit={9}
    />

    {/* View All Button */}
    <div className="text-center mt-4">
      <Link
        href="/pages/our-services"
        className="btn px-8 py-3"
      >
        View All Services
      </Link>
    </div>
  </div>
</section>

      <ProcessOne data={processData} />
      <CounterOne />
      <ChooseUsOne />
      <BannerOne type={1} />
      <ProjectOne />
    </LayoutOne>
  );
}