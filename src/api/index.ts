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
  const { projects } = await api.fetch<{
    projects: Project[];
  }>(`*[_type == "projects"][0] {
  "projects": projectData[] {
    title,
    "description": description[0].children[0].text,
    "imageUrls": images[].asset->url,
    tech,
    repo,
    siteLink
  }
}`);

  return projects;
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

export const getResume = async () => {
  const data = await api.fetch<{ url: string }>(`*[_type == "resume"][0] {
    'url': file.asset->url
  }`);

  return data.url;
};
