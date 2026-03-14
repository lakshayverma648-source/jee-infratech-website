'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from 'next/image'
import classNames from 'classnames'

const FormRequestThree = ({ className }) => {
    const [result, setResult] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        setResult("Sending...")

        const formData = new FormData(event.target)
        formData.append("access_key", "d4b147da-fbcf-4f59-b071-d6dd9f567e14")

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })

        const data = await response.json()

        if (data.success) {
            setResult("Request submitted successfully.")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult("Something went wrong. Please try again.")
        }
    }

    return (
        <section className={`section form_request sm:pb-25 pb-15 ${classNames(className)}`}>
            <div className="form_request_banner cta relative">
                <div className="container flex flex-col items-center relative sm:pt-25 pt-15 pb-[16.25rem] text-white">
                    <strong className="block mt-10 heading6 text-center animate">
                        Not Sure Where to Begin?
                    </strong>

                    <h3 className="section_tit sm:w-2/3 mt-3 heading2 text-center animate">
                        Get Reliable Civil Repair & Maintenance Solutions Today.
                    </h3>
                </div>
            </div>

            <div className="container -mt-[12.5rem]">
                <div className="relative sm:w-[83%] mx-auto bg-white box_shadow_sm">
                    <div className="form_request_form relative xl:w-[52%] sm:p-12 p-8">
                        <h4 className="heading4 animate">
                            Request A Quote
                        </h4>

                        <p className="mt-3 text-variant1 animate">
                            Contact us for professional civil repair, fabrication, plumbing, and maintenance services across Delhi NCR.
                        </p>

                        <form onSubmit={handleSubmit} className="form grid sm:grid-cols-2 grid-cols-1 gap-5 w-full mt-6">
                            <input type="hidden" name="subject" value="New Service Page Quote Request" />
                            <input type="hidden" name="from_name" value="Jee Infra Tech Solutions Website" />

                            <div className="form_group w-full animate">
                                <input
                                    type="text"
                                    name="name"
                                    className="form_input w-full py-3 px-4 border border-outline rounded"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="form_group w-full animate">
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form_input w-full py-3 px-4 border border-outline rounded"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>

                            <div className="form_group w-full animate">
                                <input
                                    type="email"
                                    name="email"
                                    className="form_input w-full py-3 px-4 border border-outline rounded"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>

                            <div className="form_group form_select w-full animate">
                                <select
                                    name="service"
                                    className="w-full py-3 px-4 border border-outline rounded"
                                    defaultValue=""
                                    required
                                >
                                    <option disabled value="">Choose Service</option>
                                                      <option value="Plumbing Work">Plumbing Work</option>
                  <option value="Painting Work">Painting Work</option>
                  <option value="Civil, Tile, Marble & Cabin Modification Work">
                    Civil, Tile, Marble & Cabin Modification Work
                  </option>
                  <option value="Sun Film & Frosted Film Work">Sun Film & Frosted Film Work</option>
                  <option value="Carpet & Chair Shampooing">Carpet & Chair Shampooing</option>
                  <option value="Façade Glass Cleaning">Façade Glass Cleaning</option>
                  <option value="Vinyl & Branding Work">Vinyl & Branding Work</option>
                  <option value="Toughened Glass Work">Toughened Glass Work</option>
                                </select>
                                <Icon.CaretDown className="arrow_down text-xl" />
                            </div>

                            <div className="form_group sm:col-span-2 w-full animate">
                                <textarea
                                    name="message"
                                    className="form_input w-full py-3 px-4 border border-outline rounded"
                                    rows="3"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <div className="form_group sm:col-span-2 mt-1 w-full animate">
                                <button type="submit" className={`btn w-full ${className === 'style-three' ? 'bg-yellow' : ''}`}>
                                    Request Quote
                                </button>
                            </div>

                            {result && (
                                <div className="form_group sm:col-span-2 w-full">
                                    <p className="text-center text-sm text-variant1">{result}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="form_request_img overflow-hidden absolute top-0 right-0 w-[48%] h-full max-xl:hidden group animate animate_left">
                        <Image
                            width={2000}
                            height={2000}
                            src="/images/components/form_request_img3.jpg"
                            className="h-full object-cover duration-400 group-hover:scale-110"
                            alt="Request A Quote"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormRequestThree