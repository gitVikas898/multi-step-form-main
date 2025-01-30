const Info = () => {
  return (
    <div>
      <form action="" className="grid gap-4">
        <div className="grid gap-4">
          <h1 className="text-4xl text-Marine-blue font-bold">Personal info</h1>
          <p className="text-xl text-Cool-gray">Please provide your name, email address, and phone number.</p>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="text-Marine-blue text-[1.05rem]">Name</label>
            <span className="text-Strawberry-red">Error</span>
          </div>
          <input type="text" name="name" className="flex-1 border text-Marine-blue border-Light-gray p-2 outline-none rounded-lg" />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="text-Marine-blue text-[1.05rem]">Email Address</label>
            <span className="text-Strawberry-red">Error</span>
          </div>
          <input type="text" name="email" className="flex-1 border text-Marine-blue border-Light-gray p-2 outline-none rounded-lg" />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="text-Marine-blue text-[1.05rem]">Phone</label>
            <span className="text-Strawberry-red">Error</span>
          </div>
          <input type="text" name="phone" className="flex-1 border text-Marine-blue border-Light-gray p-2 outline-none rounded-lg" />
        </div>
        <div className="flex items-end justify-end">
            <button className="bg-Marine-blue text-white px-5 py-3 rounded-lg">
                Next Step
            </button>
        </div>
      </form>
    </div>
  );
};

export default Info;
