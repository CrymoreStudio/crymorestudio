type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "",
  title: "Crymore Studio",
  // description:
  //   "British indie studio, making games for the fun of it.\n**NO CRYING ALLOWED** ",
  description: "We're a British indie studio, making games for the fun of it. <br> There's only one thing we hold dearly to our hearts: **NO CRYING!** ",
  socials: [
    // {
    //   label: "Twiiter",
    //   link: "https://twitter.com/itsstormzz_",
    // },
    // {
    //   label: "Bento",
    //   link: "https://bento.me/m-wolff",
    // },
    // {
    //   label: "Github",
    //   link: "https://github.com/MaeWolff",
    // },
  ],
};

export default presentation;
