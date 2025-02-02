const Success = () => {
  return (
    <div className="flex flex-col gap-10 p-10 items-center justify-center">
      <div className="flex items-center justify-center ">
        <img src="/public/images/icon-thank-you.svg" alt="" />
      </div>
      <div className=" text-center grid gap-8">
        <h1 className="text-4xl text-Marine-blue font-bold">Thank you!</h1>
        <p className="text-Cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform.If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Success;
