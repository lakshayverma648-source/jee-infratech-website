'use client'

import React, { useState } from "react";

const CtaOne = () => {

    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "d4b147da-fbcf-4f59-b071-d6dd9f567e14");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        const data = await response.json();

        if (data.success) {
            setResult("Appointment request sent successfully ✅");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Something went wrong ❌");
        }
    };

    return (
        <section className="section cta py-10 bg-dark">
            <div className="container">
                <h2 className="blind text-xs">CTA</h2>

                <form onSubmit={handleSubmit} className="cta_form flex gap-5">

                    {/* Hidden subject */}
                    <input type="hidden" name="subject" value="New Appointment Request" />

                    <div className="cta_form_ipt grid xl:grid-cols-3 sm:grid-cols-2 gap-5 w-full">

                        <div className="cta_form_group">
                            <input
                                type="text"
                                name="name"
                                className="cta_form_control w-full h-14 px-4 bg-white"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="cta_form_group">
                            <input
                                type="tel"
                                name="phone"
                                className="cta_form_control w-full h-14 px-4 bg-white"
                                placeholder="Phone Number"
                                required
                            />
                        </div>

                        <div className="cta_form_group">
                            <input
                                type="text"
                                name="message"
                                className="cta_form_control w-full h-14 px-4 bg-white"
                                placeholder="Message"
                                required
                            />
                        </div>

                        <div className="cta_form_group xl:hidden">
                            <button type="submit" className="cta_btn btn w-full">
                                Make An Appointment
                            </button>
                        </div>
                    </div>

                    <div className="cta_form_btn flex-shrink-0 max-xl:hidden">
                        <button type="submit" className="cta_btn btn hover:bg-white">
                            Make An Appointment
                        </button>
                    </div>
                </form>

                {/* Result Message */}
                {result && (
                    <p className="text-white mt-4 text-center">
                        {result}
                    </p>
                )}
            </div>
        </section>
    )
}

export default CtaOne