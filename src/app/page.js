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
import productData from "@/data/products.json";
import Product from "@/components/Product";
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

    

      {/* Products Section */}
      <section className="bg-white pt-16 pb-10">
        <div className="container flex flex-col items-center">
          <span className="section_tag tag animate">Our Products</span>

          <h3 className="section_title heading3 mt-4 text-center animate">
            Products We Offer
          </h3>

          <p className="section_desc lg:mt-5 mt-3 lg:w-1/2 body2 text-variant1 text-center animate">
            We offer a wide range of quality materials and supplies to support civil, maintenance, and infrastructure requirements.
          </p>

          <div className="product_list grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-7.5 gap-5 gap-y-10 mt-12 w-full">
            {productData.slice(4,8).map((item, index) => (
              <Product data={item} key={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/shop/our-products"
              className="btn px-8 py-3"
            >
              View All Products
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