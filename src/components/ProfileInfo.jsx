const ProfileInfo = ({ userInfo }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[37px] text-center text-15xl text-black font-poppins sm:gap-[25px] mq420:gap-[25px] mq320:gap-[37px]">
      <img
        className="relative rounded-181xl w-[200px] h-[200px] overflow-hidden shrink-0 object-cover mq420:w-[170px] mq420:h-[170px] mq320:w-[150px] mq320:h-[150px]"
        alt=""
        src={
          userInfo?.image ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        }
      />
      <div className="flex flex-col items-center justify-center gap-[3px]">
        <div className="relative font-semibold sm:text-11xl">
          {userInfo?.name}
        </div>
        <div className="relative text-xl text-left sm:text-sm">
          {userInfo?.email}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
