const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[37px] text-center text-15xl text-black font-poppins sm:gap-[25px] mq420:gap-[25px] mq320:gap-[37px]">
      <img
        className="relative rounded-181xl w-[250px] h-[250px] overflow-hidden shrink-0 object-cover mq420:w-[200px] mq420:h-[200px] mq320:w-[200px] mq320:h-[200px]"
        alt=""
        src="/assets/profile-image@2x.png"
      />
      <div className="flex flex-col items-center justify-center gap-[3px]">
        <div className="relative font-semibold sm:text-11xl">
          Alexander Grahambell
        </div>
        <div className="relative text-xl text-left sm:text-sm">
          alex@gmail.com
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[40px] text-left text-5xl sm:gap-[20px]">
        <div className="rounded-31xl flex flex-row py-[15px] px-5 items-start justify-start border-[1px] border-solid border-black mq320:py-2.5 mq320:px-[15px] mq320:box-border">
          <div className="relative font-semibold sm:text-base mq420:text-base">
            Favorites
          </div>
        </div>
        <div className="rounded-31xl bg-black flex flex-row py-[15px] px-5 items-start justify-start text-white border-[1px] border-solid border-black mq320:py-2.5 mq320:px-[15px] mq320:box-border">
          <div className="relative font-semibold sm:text-base">
            Reading list
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
