import type { ComponentType, SVGProps } from "react";
import { Boxes, Database, KeyRound, Lightbulb, MessageSquare, Smartphone } from "lucide-react";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandCSharp, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import type { SkillIcon as SkillIconKey } from "@/data/skills";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const icons: Record<SkillIconKey, IconComponent> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  csharp: TbBrandCSharp,
  sql: TbSql,
  react: SiReact,
  nodejs: SiNodedotjs,
  express: SiExpress,
  bootstrap: SiBootstrap,
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  vscode: VscVscode,
  postman: SiPostman,
  figma: SiFigma,
  api: TbApi,
  jwt: KeyRound,
  responsive: Smartphone,
  oop: Boxes,
  database: Database,
  "problem-solving": Lightbulb,
  communication: MessageSquare,
};

export function SkillIcon({ icon, className = "h-4 w-4" }: { icon: SkillIconKey; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden="true" />;
}
