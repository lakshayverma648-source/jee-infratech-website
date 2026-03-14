import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const logos = [
    {
        type: 1,
        logo: "orange"
    },
    {
        type: 2,
        logo: "blue"
    },
    {
        type: 3,
        logo: "yellow"
    },
    {
        type: 4,
        logo: "pink"
    }
]

const BannerOne = ({ type }) => {
    return (
        <section className={`section banner sm:py-16 py-10`}>
            <h3 className="blind">Banner</h3>
            <Marquee>
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Fabrication Work</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Plumbing Work</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Painting Work</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Vinyl & Branding Work
                </strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Fabrication Work</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Painting Work</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Plumbing Work</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Carpet & Chair Shampooing</strong>
                <Image src={`/images/logo_${logos.find(item => item.type === type)?.logo || 'orange'}.png`} width={2000} height={2000} alt='logo_orange' className='max-w-8' />
            </Marquee>
        </section>
    )
}

export default BannerOne