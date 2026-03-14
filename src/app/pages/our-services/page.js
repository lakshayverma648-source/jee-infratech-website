import LayoutOne from '@/components/Layout/LayoutOne'
import serviceData from "@/data/service/data.json"
import ServiceOne from '@/components/Sections/Service/ServiceOne'
import FormRequestThree from '@/components/Sections/FormRequest/FormRequestThree'
import { Breadcrumb } from '@/components/Other/Breadcrumb'

export default function ourServices() {
    return (
        <LayoutOne>
            <Breadcrumb 
                image={'/images/breadcrumb/services.jpg'} 
                nav2={'Services'} 
                nav2Link={'/pages/our-services'} 
                title={'Our Services'} 
            />

            <ServiceOne 
                className={'bg-white'} 
                data={serviceData} 
                start={0} 
                limit={serviceData.length} 
            />

            <FormRequestThree />
        </LayoutOne>
    )
}