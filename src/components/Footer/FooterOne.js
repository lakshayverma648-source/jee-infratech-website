'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import serviceData from "@/data/service/data.json"
import { convertToSlug } from "@/common/utils";

export default function FooterOne({ className, color }) {
  const [activeLink, setActiveLink] = useState(null)

  const handleActiveLink = function (link) {
    setActiveLink(prevLink => prevLink === link ? null : link)
  }

  return (
    <footer className={`footer sm:pt-20 pt-12 bg-dark text-white ${classNames(className)}`}>
      <div className="container flex flex-wrap justify-between gap-10">
        <div className="footer_info md:w-1/4 w-full">
          <h1>
            <Link href="/" className="footer_logo flex items-center gap-3">
              <Image width={2000} height={2000} src={`/images/logo_white.png`} className="flex-shrink-0 w-10" alt="logo" />
              <strong className="heading6">Jee Infratech Solutions</strong>
            </Link>
          </h1>

          <div className="footer_map mt-7">
            <div className="flex items-center gap-2 pb-2">
              <Icon.MapPin className="text-1xl" />
              <span>WZ - 1656 C Nangal Raya, New Delhi - 110046</span>
            </div>
          </div>

          <div className="footer_mail flex flex-wrap items-center gap-2 mt-4">
            <Icon.Envelope className="text-2xl" />
            <span>purchase@jeeinfratechsolutions.com</span>
          </div>

          <div className="footer_mail flex flex-wrap items-center gap-2 mt-4">
            <Icon.Envelope className="text-2xl" />
            <span>operations@jeeinfratechsolutions.com</span>
          </div>

          <ul className="footer_social flex flex-wrap items-center gap-3 mt-7">
            <li className="social_item">
              <Link
                href="https://www.youtube.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank"
              >
                <Icon.YoutubeLogo className="text-xl" />
                <span className="blind">link youtube</span>
              </Link>
            </li>

            <li className="social_item">
              <Link
                href="https://www.linkedin.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank"
              >
                <Icon.LinkedinLogo className="text-xl" />
                <span className="blind">link linkedin</span>
              </Link>
            </li>

            <li className="social_item">
              <Link
                href="https://www.instagram.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank"
              >
                <Icon.InstagramLogo className="text-xl" />
                <span className="blind">link instagram</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer_content md:w-2/3 w-full">
          <div className="footer_nav flex max-xl:flex-wrap justify-between gap-10 gap-y-6 mt-10">
            <div className="footer_nav_area max-sm:w-full">
              <strong className="footer_nav_heading txt-label max-sm:hidden">Quick Links</strong>
              <button
                type="button"
                className={`footer_nav_btn btn_toggle flex items-center justify-between relative w-full py-2 border-b border-variant1 text-lg font-bold uppercase sm:hidden ${activeLink === 1 ? 'active' : ''}`}
                onClick={() => handleActiveLink(1)}
              >
                <span>About</span>
                <Icon.Plus className="ph ph-plus" />
                <Icon.Minus className="ph ph-minus absolute top-1/2 right-0 -translate-y-1/2" />
              </button>

              <ul className="footer_nav_list flex flex-col gap-2 mt-3">
                <li>
                  <Link
                    href="/pages/about-us"
                    className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/our-products"
                    className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/our-projects1"
                    className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer_nav_area max-sm:w-full">
              <strong className="footer_nav_heading txt-label max-sm:hidden">Services</strong>
              <button
                type="button"
                className={`footer_nav_btn btn_toggle flex items-center justify-between relative w-full py-2 border-b border-variant1 text-lg font-bold uppercase sm:hidden ${activeLink === 2 ? 'active' : ''}`}
                onClick={() => handleActiveLink(2)}
              >
                <span>Categories</span>
                <Icon.Plus className="ph ph-plus" />
                <Icon.Minus className="ph ph-minus absolute top-1/2 right-0 -translate-y-1/2" />
              </button>

              <ul className="footer_nav_list flex flex-col gap-2 mt-3">
                {serviceData.map(item => (
                  <li key={item.id}>
                    <Link
                      className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                      href={process.env.PUBLIC_URL + "/services/[slug]"}
                      as={process.env.PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_nav_area max-md:w-full">
              <div className="w-full h-40 mb-5 rounded overflow-hidden border border-white border-opacity-10">
                <iframe
                  src="https://www.google.com/maps?q=WZ-1656C%20Nangal%20Raya%20New%20Delhi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <strong className="footer_nav_heading txt-label">Get a Free Estimate Today!</strong>
              <p className="footer_nav_desc mt-3 text-variant2">Call us for a cost estimate over the phone</p>
              <h5 className="footer_nav_contact heading5 mt-4">+91 9310125253</h5>
              <Link href="/contact" className={`btn mt-4 bg-${color} hover:bg-white`}>
                Request an estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="footer_bottom flex items-center justify-between max-sm:flex-col gap-2 w-full mt-5 py-4 border-t border-white border-opacity-10">
          <p className="copyright text-variant2 text-center">
            Copyright © 2026 Jee Infratech Solutions.
          </p>
          <div className="footer_bottom_link flex items-center gap-2.5">
            <Link className="text-variant2 hover:underline hover:text-white" href="#!">
              All rights reserved
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}