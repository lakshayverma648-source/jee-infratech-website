'use client'

import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css/bundle';

const ChooseUsOne = () => {
    return (
        <section className="section choose_us sm:pt-25 pt-15">
            <div className="container flex max-xl:flex-col gap-y-10">
                <div className="choose_us_content w-full xl:pr-20">
                    <span className="section_tag tag animate">WHY CHOOSE US</span>

                    <h3 className="section_tit mt-4 heading3 animate">
                        Trusted Civil & Facility Services You Can Rely On
                    </h3>

                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">
                        Our experienced team delivers reliable civil, maintenance, and facility services—from execution to ongoing support—ensuring efficient performance, quality workmanship, and dependable solutions for commercial and residential projects.
                    </p>

                    <div className="btn_area animate">
                        <Link href="/pages/about-us" className="btn w-fit lg:mt-8 mt-6">
                            about us
                        </Link>
                    </div>

                    {/* CLIENTS SECTION */}
                    <div className="mt-16 animate">
                        <p className="text-xl font-semibold text-variant1 mb-5">
                            Our Clients
                        </p>

                        <div className="flex items-center gap-8 flex-wrap">
                            <div className="h-16 w-40 flex items-center justify-center">
                                <img src="/images/clients/1.png" className="max-h-full max-w-full object-contain" alt="client1" />
                            </div>

                            <div className="h-16 w-40 flex items-center justify-center">
                                <img src="/images/clients/2.jpg" className="max-h-full max-w-full object-contain" alt="client2" />
                            </div>

                            <div className="h-16 w-40 flex items-center justify-center">
                                <img src="/images/clients/3.png" className="max-h-full max-w-full object-contain" alt="client3" />
                            </div>

                            <div className="h-16 w-40 flex items-center justify-center">
                                <img src="/images/clients/4.jpg" className="max-h-full max-w-full object-contain" alt="client4" />
                            </div>

                            <div className="h-16 w-40 flex items-center justify-center">
                                <img src="/images/clients/5.jpg" className="max-h-full max-w-full object-contain" alt="client5" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="choose_us_list flex-shrink-0 xl:w-1/2 w-full">
                    <Swiper
                        loop={true}
                        allowTouchMove={true}
                        spaceBetween={16}
                        slidesPerView={1}
                        modules={[Grid, Autoplay]}
                        className='choose_us_swiper w-full h-full'
                        autoplay={{
                            delay: 3500,
                        }}
                        breakpoints={{
                            640: {
                                loop: false,
                                allowTouchMove: false,
                                slidesPerView: 2,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                },
                                spaceBetween: 30,
                                autoplay: false,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-pencil text-6xl"></span>
                                <strong className="block mt-6 heading5">Customized Solutions</strong>
                                <p className="mt-3 text-variant1">
                                    We tailor our services to meet your exact requirements, ensuring efficient execution and long-term reliability.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-timer text-6xl"></span>
                                <strong className="block mt-6 heading5">Timely Response</strong>
                                <p className="mt-3 text-variant1">
                                    Our team ensures quick response and timely delivery, minimizing downtime and ensuring smooth project execution.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-reward text-6xl"></span>
                                <strong className="block mt-6 heading5">Quality Work</strong>
                                <p className="mt-3 text-variant1">
                                    We maintain high standards of workmanship using reliable materials and skilled professionals.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-hand-coin text-6xl"></span>
                                <strong className="block mt-6 heading5">Transparent Pricing</strong>
                                <p className="mt-3 text-variant1">
                                    Clear and upfront pricing ensures complete transparency with no hidden costs.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsOne