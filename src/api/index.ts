import { api } from "~/sanity";
import type { Social, Project } from "~/types";

export const getSocials = async () => {
  const data = await api.fetch<Social[]>(`*[_type == 'social']{title, link}`);
  const order = ["LinedkIn", "GitHub", "Discord"];

  const sortedData: Social[] = data.sort((a, b) => {
    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  return sortedData;
};

export const getProjects = async () => {
  const data = await api.fetch<Project[]>(`*[_type == "project"] {
    title,
    tech,
    'description': description[0].children[0].text,
    'imgUrls': images[].asset->url  }`);

  return data;
};

export const getAboutMe = async () => {
  const data = await api.fetch<
    [
      {
        description: string[];
      },
    ]
  >(`*[_type == "about"] {
    "description": description[].children[].text
  }`);

  return data[0];
};
