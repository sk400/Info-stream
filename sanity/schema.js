import favoritePost from "./schemas/favoritePost";
import summarizedPost from "./schemas/summarizedPost";
import readLaterPost from "./schemas/readLaterPost";
import user from "./schemas/user";

export const schema = {
  types: [readLaterPost, user, favoritePost, summarizedPost],
};
