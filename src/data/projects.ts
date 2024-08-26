export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  onHold?: boolean;
};

const projects: Project[] = [
  {
    title: "🐸🔫 Trigger Hoppy",
    techs: ["Unity"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "💊 Trip Shift",
    techs: ["UE5"],
    link: "/",
    onHold: true,
  },

];

export default projects;
