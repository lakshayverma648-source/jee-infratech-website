import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import Product from '@/components/Product';
import productData from "@/data/products.json";

export default function ourProducts() {
    return (
        <LayoutOne>
            <Breadcrumb
                image={'/images/breadcrumb/blog.jpg'}
                nav2={'Products'}
                nav2Link={'/pages/our-products'}
                title={'Our Products'}
            />

            <section className="section shop sm:py-25 py-15">
                <div className="container">
                    <div className="shop_product w-full">
                        <div className="product_list grid lg:grid-cols-3 grid-cols-2 sm:gap-7.5 gap-5 gap-y-10">
                            {productData.slice(0, 8).map((item, index) => (
                                <Product data={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </LayoutOne>
    );
}