import { useRef, useState } from "react";
import validate from "../utils/validate";
const Info = ({next}) => {

  const name = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);

  const  [errorMessage, seterrorMessage] = useState({})

  const handleNextStep =()=>{
      const nameValue = name.current.value;
      const emailValue = email.current.value;
      const phoneValue = phoneNumber.current.value;

      const message = validate(nameValue,emailValue,phoneValue);

      seterrorMessage(message);


      if(Object.values(message).length === 0){
          next();
      }

  }


  return (
    <div>
      <form action="" onSubmit={(e)=>e.preventDefault()}  className="grid gap-4 p-4">
        <div className="grid gap-4">
          <h1 className="text-4xl text-Marine-blue font-bold">Personal info</h1>
          <p className="text-xl text-Cool-gray">Please provide your name, email address, and phone number.</p>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="text-Marine-blue text-[1.05rem]">Name</label>
            {errorMessage.name && <span className="text-Strawberry-red">{errorMessage.name}</span>}
          </div>
          <input type="text" name="name" className="flex-1 border text-Marine-blue border-Light-gray p-2 outline-none rounded-lg"  ref={name}/>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="text-Marine-blue text-[1.05rem]">Email Address</label>
            {errorMessage.email && <span className="text-Strawberry-red">{errorMessage.email}</span>}
          </div>
          <input type="text" name="email" className="flex-1 border text-Marine-blue border-Light-gray p-2 outline-none rounded-lg" ref={email}/>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="text-Marine-blue text-[1.05rem]">Phone</label>
            {errorMessage.phone && <span className="text-Strawberry-red">{errorMessage.phone}</span>}
          </div>
          <input type="text" name="phone" className="flex-1 border text-Marine-blue border-Light-gray p-2 outline-none rounded-lg" ref={phoneNumber}/>
        </div>
        <div className="flex items-end justify-end">
            <button className="bg-Marine-blue text-white px-5 py-3 rounded-lg" onClick={handleNextStep}>
                Next Step
            </button>
        </div>
      </form>
    </div>
  );
};

export default Info;
