'use client'

import { useState } from 'react'
import LayoutOne from '@/components/Layout/LayoutOne'
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function contact() {
  const [result, setResult] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const form = event.target
    const formData = new FormData(form)

    formData.append("_subject", "New Contact Page Inquiry")
    formData.append("_template", "table")
    formData.append("_captcha", "false")

    try {
      const response = await fetch("https://formsubmit.co/ajax/purchase@jeeinfratechsolutions.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setResult("Your message has been sent successfully.")
        form.reset()
      } else {
        setResult(data.message || "Something went wrong. Please try again.")
        console.log("FormSubmit Error:", data)
      }
    } catch (error) {
      console.log("Network Error:", error)
      setResult("Network error. Please try again.")
    }
  }

  return (
    <LayoutOne>
      <section className="section map h-[520px]">
        <h3 className="blind">Map</h3>
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.380095079735!2d77.1050007924602!3d28.60907390270984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1cacf42fce4b%3A0xe288dfe46afe7ead!2sNangal%20Raya%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1773428221420!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="section form_contact sm:py-25 py-15">
        <div className="container flex items-center max-xl:flex-col gap-[9.5rem] gap-y-14">
          <div className="form_contact_content w-full">
            <span className="section_tag tag animate">Contact Us</span>
            <h3 className="section_tit mt-4 heading3 animate">Get in Touch with Us</h3>
            <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">
              Reach out today for expert guidance, service inquiries, or personalized solutions.
              We're here to support your project every step of the way!
            </p>

            <ul className="list_feature flex flex-col gap-3 mt-7 pt-7 border-t border-outline">
              <li className="flex items-center gap-3 animate">
                <Icon.MapPin className="text-2xl" />
                <span>WZ - 1656 C Nangal Raya, New Delhi - 110046</span>
              </li>
              <li className="flex items-center gap-3 animate">
                <Icon.Envelope className="text-2xl" />
                <span>purchase@jeeinfratechsolutions.com</span>
              </li>
              <li className="flex items-center gap-3 animate">
                <Icon.Envelope className="text-2xl" />
                <span>operations@jeeinfratechsolutions.com</span>
              </li>
              <li className="flex items-center gap-3 animate">
                <Icon.PhoneCall className="text-2xl" />
                <span>+91 9310125253</span>
              </li>
            </ul>
          </div>

          <div
            className="form_contact_form flex-shrink-0 relative xl:w-1/2 w-full sm:p-10 p-7 bg-surface animate animate_left"
            style={{ "--i": 2 }}
          >
            <h4 className="heading4">Get a Free Consultation</h4>
            <p className="mt-3 text-variant1">Use the form below to get in touch with the team</p>

            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="form grid sm:grid-cols-2 grid-cols-1 gap-5 w-full mt-6"
            >
              <div className="form_group w-full">
                <input
                  type="text"
                  name="name"
                  className="form_input w-full py-3 px-4 border border-outline bg-white"
                  placeholder="Your Name *"
                  required
                />
              </div>

              <div className="form_group w-full">
                <input
                  type="email"
                  name="email"
                  className="form_input w-full py-3 px-4 border border-outline bg-white"
                  placeholder="Your Email *"
                  required
                />
              </div>

              <div className="form_group sm:col-span-2 w-full">
                <input
                  type="tel"
                  name="phone"
                  className="form_input w-full py-3 px-4 border border-outline bg-white"
                  placeholder="Contact Number *"
                  required
                />
              </div>

              <div className="form_group form_select col-span-full w-full">
                <select
                  name="service"
                  className="w-full py-3 px-4 border border-outline bg-white"
                  defaultValue=""
                  required
                >
                  <option disabled value="">Choose Service</option>
                  <option value="Fabrication Work">Fabrication Work</option>
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

              <div className="form_group sm:col-span-2 w-full">
                <textarea
                  name="message"
                  className="form_input w-full py-3 px-4 border border-outline bg-white"
                  rows="4"
                  placeholder="Write your message here *"
                  required
                ></textarea>
              </div>

              <div className="form_group sm:col-span-2 w-full">
                <label className="block mb-2 text-sm text-variant1">
                  Upload Attachment
                </label>
                <input
                  type="file"
                  name="attachment"
                  className="w-full py-3 px-4 border border-outline bg-white"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
                />
              </div>

              <div className="form_group mt-2 w-full">
                <button type="submit" className="btn">Make An Appointment</button>
              </div>

              {result && (
                <div className="form_group sm:col-span-2 w-full">
                  <p className="text-sm text-variant1">{result}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}