export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  // {
  //   title: "Dictionary App",
  //   techs: ["ReactJS (NextJS)", "react-query", "zod"],
  //   link: "https://github.com/MaeWolff/dictionary-app",
  // },
  // {
  //   title: "Portfolio / Lina BLIDI",
  //   techs: ["ReactJS (NextJS)", "TypeScript"],
  //   link: "https://www.linablidi.fr/",
  // },
  {
    title: "💊 Trip Shift",
    techs: ["UE5"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "🗡️ Morsfero",
    techs: ["UE5"],
    link: "/",
    isComingsoon: true,
  },
];

export default projects;
