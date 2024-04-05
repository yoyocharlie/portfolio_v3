export type Social = {
  title: string;
  link: string;
};

type TechSvg = {
  url: string;
  imageTitle: string;
};

export type Project = {
  title: string;
  description: string;
  imgUrls: string[];
  techSvgs: { techSvgs: TechSvg[] };
};
