import { groq } from "next-sanity";

export const userQuery = (email) => {
  const query = groq`
    *[_type == "user" && email == '${email}' ]
    `;

  return query;
};
