

const Pagination = ({step}) => {
  return (
    <div className="bg-[url('/public/images/bg-sidebar-desktop.svg')] bg-no-repeat h-full w-full p-4" >
        <div className="grid gap-4">
            <div className="flex gap-2">
                <div id="circle" className={`h-6 w-6 rounded-full border border-Alabaster flex items-center justify-center ${step === 1 ? "bg-Light-blue":""}`}>
                        <span className={`text-Alabaster ${step === 1 ? "text-black" : ""}`}>1</span>
                </div>
                <div className="grid">
                    <span className="text-Light-gray">Step 1</span>
                    <span className="text-white">YOUR INFO</span>
                </div>
            </div>
            <div className="flex gap-2">
            <div id="circle" className={`h-6 w-6 rounded-full border border-Alabaster flex items-center justify-center ${step === 2 ? "bg-Light-blue":""}`}>
                        <span className={`text-Alabaster ${step === 2 ? "text-black" : ""}`}>2</span>
                </div>
                <div className="grid">
                    <span className="text-Light-gray">Step 2 </span>
                    <span className="text-white">Select Your Plan</span>
                </div>
            </div>
            <div className="flex gap-2">
            <div id="circle" className={`h-6 w-6 rounded-full border border-Alabaster flex items-center justify-center ${step === 3 ? "bg-Light-blue":""}`}>
                        <span className={`text-Alabaster ${step === 3 ? "text-black" : ""}`}>3</span>
                </div>
                <div className="grid">
                    <span className="text-Light-gray">Step 3</span>
                    <span className="text-white">ADD ONS</span>
                </div>
            </div>
            <div className="flex gap-2">
            <div id="circle" className={`h-6 w-6 rounded-full border border-Alabaster flex items-center justify-center ${step === 4 ? "bg-Light-blue":""}`}>
                        <span className={`text-Alabaster ${step === 4 ? "text-black" : ""}`}>4</span>
                </div>
                <div className="grid">
                    <span className="text-Light-gray">Step 4</span>
                    <span className="text-white">SUMMARY</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagination