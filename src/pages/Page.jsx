import { useState } from "react"
import Addons from "../components/Addons"
import Finish from "../components/Finish"
import Info from "../components/Info"
import Plan from "../components/Plan"
import Pagination from "../components/Pagination"


const Page = () => {

  const [step, setstep] = useState(1);

  const nextStep = ()=>{
      setstep((prev)=>prev+1)
  }
  const prevStep = ()=>{
    setstep((prev)=>prev-1)
  }

  return (
    <div className="bg-White p-10 flex w-full h-screen gap-4">
          <div>
              <Pagination step={step}/>
          </div>
          <div>
            {step === 1 && <Info next={nextStep}/>}
            {step === 2 && <Plan next={nextStep} prev={prevStep}/>}
            {step === 3 &&<Addons next={nextStep} prev={prevStep}/>}
            {step === 4 &&<Finish prev={prevStep}/>}
          </div>
          
    </div>
  )
}

export default Page