import { groq } from "next-sanity";

export const userQuery = (email) => {
  const query = groq`
    *[_type == "user" && email == '${email}'  ]
    `;

  return query;
};

export const userDetailsQuery = (userId) => {
  const query = groq`
*[_type == 'user' && _id == '${userId}']{
  name,
  _id,
  email,
  image
}
`;

  return query;
};

export const userFavoriteNews = (userId) => {
  const query = groq`
  *[_type == 'favoriteNews' && userId == '${userId}']
  `;

  return query;
};

export const userReadingList = (userId) => {
  const query = groq`
  *[_type == 'readLatterNews' && userId == '${userId}']
  `;

  return query;
};
