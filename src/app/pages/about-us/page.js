import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import AboutThree from '@/components/Sections/About/AboutThree'
import CounterOne from '@/components/Sections/Counter/CounterOne'
import processData from "@/data/process/data.json"
import ProcessThree from '@/components/Sections/Process/ProcessThree'
import ChooseUsTwo from '@/components/Sections/ChooseUs/ChooseUsTwo'

export default function aboutUs() {
  return (
    <LayoutOne>
      <Breadcrumb
        image={'/images/breadcrumb/about.jpg'}
        nav2={'About Us'}
        nav2Link={'/pages/about-us'}
        title={'About Us'}
      />

      <AboutThree color={'orange'} />

      <CounterOne />

      <ProcessThree
        data={processData}
        className={'style-three sm:py-25 py-15'}
        color={'orange'}
      />

      <ChooseUsTwo
        className={'border-b border-outline'}
        color={'orange'}
      />

    </LayoutOne>
  )
}