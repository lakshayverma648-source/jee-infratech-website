import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const ServiceContent = ({ foundPost }) => {
  return (
    <div className="services_detail w-full">

      {/* Service Title */}
      <h4 className="section_title mt-10 heading4">
        About Our {foundPost.title}
      </h4>

      {/* Description */}
      <p className="section_desc mt-4 body2 text-variant1">
        Jee Infra Tech Solutions provides professional {foundPost.title?.toLowerCase()} services
        with a focus on quality workmanship, reliable execution, and timely completion.
        Our experienced team ensures every project is handled with care and precision
        for commercial, residential, and infrastructure requirements.
      </p>

      {/* Features */}
      <ul className="services_feature_list flex flex-col gap-4 mt-6">

        <li className="services_feature_item flex gap-3">
          <Icon.Check className="mt-1 text-orange text-xl" />
          <p className="body2">
            <strong className="font-bold">Professional Service:</strong> Our skilled team delivers
            reliable and efficient solutions tailored to project requirements.
          </p>
        </li>

        <li className="services_feature_item flex gap-3">
          <Icon.Check className="mt-1 text-orange text-xl" />
          <p className="body2">
            <strong className="font-bold">Quality Workmanship:</strong> We focus on durable
            results using trusted materials and proven techniques.
          </p>
        </li>

        <li className="services_feature_item flex gap-3">
          <Icon.Check className="mt-1 text-orange text-xl" />
          <p className="body2">
            <strong className="font-bold">Timely Completion:</strong> Every service is
            executed efficiently while maintaining high standards.
          </p>
        </li>

        <li className="services_feature_item flex gap-3">
          <Icon.Check className="mt-1 text-orange text-xl" />
          <p className="body2">
            <strong className="font-bold">Customized Solutions:</strong> We adapt
            services according to site conditions and project needs.
          </p>
        </li>

      </ul>

      {/* Extra Content */}
      <p className="section_desc mt-6 body2 text-variant1">
        Our services are designed to improve functionality, safety, and aesthetics
        across offices, commercial buildings, and infrastructure projects.
        With a commitment to professional execution and dependable service,
        Jee Infra Tech Solutions ensures long-lasting and practical results.
      </p>

      <p className="section_desc mt-4 body2 text-variant1">
        We proudly serve clients across Delhi, Noida, and Gurugram,
        delivering civil repair, maintenance, fabrication, and infrastructure
        services with professionalism and reliability.
      </p>

    </div>
  )
}

export default ServiceContent