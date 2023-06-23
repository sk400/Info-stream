import { ProfileInfo, ProfilePageNavbar, UserChoosenNews } from "@/components";
import { client } from "../../../../../sanity/lib/client";

import {
  userDetailsQuery,
  userFavoriteNews,
  userReadingList,
} from "@/lib/sanityQueries";

const ProfilePage = async ({ params: { id } }) => {
  const query = userDetailsQuery(id);

  const data = await client.fetch(query);

  const userInfo = data[0];

  const favoriteNewsQuery = userFavoriteNews(id);
  const readingListQuery = userReadingList(id);

  const promises = [
    client.fetch(favoriteNewsQuery),
    client.fetch(readingListQuery),
  ];

  const [favoriteNews, readingList] = await Promise.all(promises);

  return (
    <div className="bg-gray w-full">
      <ProfilePageNavbar />
      <div className="   flex flex-col py-[60px] px-0 box-border items-center justify-center ">
        <ProfileInfo userInfo={userInfo} />
        <UserChoosenNews
          favoriteNews={favoriteNews}
          readingList={readingList}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
