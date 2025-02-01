const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img src="/public/images/icon-thank-you.svg" alt="" />
      </div>
      <div className=" text-center grid">
        <p>Thank you!</p>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform.<br></br> If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Success;
