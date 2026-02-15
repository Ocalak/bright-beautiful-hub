export interface ProjectDetail {
  slug: string;
  titleKey: string;
  descKey: string;
  tech: string;
  githubLink: string;
  detailsKey: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "load-forecasting",
    titleKey: "proj1Title",
    descKey: "proj1Desc",
    tech: "Python, R, Neural Networks, SHAP",
    githubLink: "https://github.com/Ocalak/FeedForward-Neural-Network",
    detailsKey: "proj1Details",
  },
  {
    slug: "rental-platform",
    titleKey: "proj2Title",
    descKey: "proj2Desc",
    tech: "Python, FastAPI, PostgreSQL, AWS, ETL",
    githubLink: "https://github.com/Ocalak/Rental-House-Portal-FastAPI-React-Postgres-AWS-",
    detailsKey: "proj2Details",
  },
  {
    slug: "financial-dashboard",
    titleKey: "proj3Title",
    descKey: "proj3Desc",
    tech: "Python, SQL, Dashboarding",
    githubLink: "https://ocalak.github.io/kion-group-dashboard/",
    detailsKey: "proj3Details",
  },
  {
    slug: "bitcoin-forecasting",
    titleKey: "proj4Title",
    descKey: "proj4Desc",
    tech: "Python, R, Time Series",
    githubLink: "https://github.com/Ocalak/Forecasting-Bitcoin",
    detailsKey: "proj4Details",
  },
  {
    slug: "econometrics-with-r",
    titleKey: "proj5Title",
    descKey: "proj5Desc",
    tech: "R, Econometrics, Statistics",
    githubLink: "https://github.com/Ocalak/EconometricsWithR",
    detailsKey: "proj5Details",
  },
];
