import favoriteNews from "./schemas/favoriteNews";
import summarizedNews from "./schemas/summarizedNews";
import readLaterNews from "./schemas/readLaterNews";
import user from "./schemas/user";

export const schema = {
  types: [readLaterNews, user, favoriteNews, summarizedNews],
};
