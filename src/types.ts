export type Social = {
  title: string;
  link: string;
};

export type Project = {
  title: string;
  description: string;
  imageUrls: string[];
  tech: string[];
  repo: string | null;
  siteLink: string | null;
};
