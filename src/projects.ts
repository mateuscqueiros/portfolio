import { Project } from "./types";

const projects: Project[] = [
  {
    title: "Accountant",
    github: "https://github.com/mateuscqueiros/accountant",
    badges: ["React", "Next", "Typescript"],
    image: "/screenshots/accountant.png",
    link: "https://accountant-mt.vercel.app",
    text: `Accountant é o codinome do meu projeto de gestão financeira para
        pessoas que precisam se organizar com as contas mensalmente. Já
        conta com funcionalidades de categorias, adicionar e criar
        transações e estatísticas básicas.`,
  },
  {
    title: "Script site",
    github: "https://github.com/mateuscqueiros/script-website",
    badges: ["React", "Next"],
    image: "/screenshots/script-bot.png",
    link: "https://script-bot.vercel.app/",
    text: `Um projeto pessoal que fiz para o bot do meu primo (Script). Foi um
        dos primeiros projetos que fiz desde o design até o código. Até hoje
        fico feliz com o resultado!`,
  },
  {
    title: "News Hacker",
    github: "https://github.com/mateuscqueiros/news-hacker",
    badges: ["React", "Next"],
    image: "/screenshots/news-hacker.png",
    link: "https://news-hacker.vercel.app/",
    text: `Quando descobri que a Hacker News tinha uma API, decidi fazer esse site pra testar! Muito nostálgico pra mim ver ele hoje em dia.`,
  },
  {
    title: "Novitar",
    badges: ["React", "Next", "styled"],
    image: "/screenshots/novitar.png",
    link: "https://novitar-gamma.vercel.app/",
    text: `Um site simples que fiz com meu primo para um cliente. O design é bem clean!`,
  },
  {
    title: "Nextjs Blog",
    github: "https://github.com/mateuscqueiros/nextjs-blog",
    badges: ["React", "Next"],
    image: "/screenshots/nextjs-blog.png",
    link: "https://nextjs-mt.vercel.app",
    text: `Aprendendo a usar SSR e SSG! (Quando ainda existiam...)`,
  },
];

export default projects;
