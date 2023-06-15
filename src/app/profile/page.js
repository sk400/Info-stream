import { ProfileInfo, UserChoosenNews } from "@/components";

const ProfilePage = () => {
  return (
    <div className="relative bg-gray w-full overflow-hidden flex flex-col py-[60px] px-0 box-border items-center justify-center ">
      <ProfileInfo />
      <UserChoosenNews />
    </div>
  );
};

export default ProfilePage;
