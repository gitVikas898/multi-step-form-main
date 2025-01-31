const Finish = ({prev,next}) => {
  return (
    <div>
      <form action="" className="grid gap-6">
        <div>
          <h1 className="text-4xl text-Marine-blue font-bold">Finishing up</h1>
          <p className="text-xl text-Cool-gray">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="grid gap-6 p-6 bg-Alabaster rounded-lg">
          <div className="flex justify-between items-center border-b border-Light-gray p-4">
            <span className="text-Marine-blue">Arcade(Monthly)</span>
            <span className="text-Marine-blue">$9/mo</span>
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <span className="text-Cool-gray">Online Service</span>
              <span className="text-Marine-blue">+1$/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-Cool-gray">Larger Storage</span>
              <span className="text-Marine-blue">+2$/mo</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-Cool-gray">Total</span>
            <span className="text-Purplish-blue">Result</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-Magnolia text-Marine-blue px-5 py-3 rounded-lg" onClick={prev}>
            Go Back
          </button>

          <button className="bg-Purplish-blue text-white px-5 py-3 rounded-lg" >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Finish;
