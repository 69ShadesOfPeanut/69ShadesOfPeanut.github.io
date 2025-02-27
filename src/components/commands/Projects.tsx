import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are a few of my projects I am working on
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Welcome to the survey",
    desc: "A psychological horror game developed in Godot that started out as a game jam. I am now updating it to be fit for a steam release.",
    url: "https://store.steampowered.com/app/3444160/Welcome_To_The_Survey/",
  },
  {
    id: 2,
    title: "Game development",
    desc: "A collection of games made by me. Mostly made as part of game jams. My engine of choice is Godot, using their native language of GDScript.",
    url: "https://peanutdev.itch.io/",
  },
  {
    id: 3,
    title: "Horror Craft",
    desc: "My first ever Minecraft modpack and most successful one to date, sitting with over 300,000 downloads. It has landed me a partnership with bisect hosting.",
    url: "https://www.curseforge.com/minecraft/modpacks/horror-craft",
  },
  {
    id: 4,
    title: "Minecraft modpacks",
    desc: "A collection of my Minecraft modpacks, these are by far my most popular projects. Better Beta being my main passion project for the moment.",
    url: "https://www.curseforge.com/members/69shadesofpeanut/projects",
  },
];

export default Projects;
