import { api } from "~/sanity";

type Socials = {
  title: string;
  url: string;
};

export const getSocials = async () => {
  const data = await api.fetch<Socials>(`*[_type == 'social']{title, link}`);
  const order = ["LinedkIn", "GitHub", "Discord"];

  const sortedData: Socials[] = data.sort((a, b) => {
    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  return sortedData;
};
