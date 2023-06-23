import { AiFillGithub, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { MdOutlineContactPage, MdPerson } from "react-icons/md";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3, TbBrandRedux } from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiMui, SiPhp } from "react-icons/si";
import {
  SiStyledcomponents,
  SiFirebase,
  SiRedux,
  SiFigma,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const StyledIcon = (Icon) => styled(Icon)`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.textColor3};
  transition: all 0.5s ease 0s;
`;

export const AiFillGithubs = StyledIcon(AiFillGithub);

export const MdOutlineContactPages = StyledIcon(MdOutlineContactPage);

const StyledIcon2 = (Icon) => styled(Icon)`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.textColor4};
  transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
`;
export const AiFillGithubs2 = StyledIcon2(AiFillGithub);
export const ImHtmlFive2s = StyledIcon2(ImHtmlFive2);
export const TbBrandCss3s = StyledIcon2(TbBrandCss3);
export const FaSasss = StyledIcon2(FaSass);
export const SiMuis = StyledIcon2(SiMui);
export const SiStyledcomponentss = StyledIcon2(SiStyledcomponents);
export const SiJavascripts = StyledIcon2(SiJavascript);
export const FaReacts = StyledIcon2(FaReact);
export const SiPhps = StyledIcon2(SiPhp);
export const GrMysqls = StyledIcon2(GrMysql);
export const SiFirebases = StyledIcon2(SiFirebase);
export const SiReduxs = StyledIcon2(SiRedux);
export const SiFigmas = StyledIcon2(SiFigma);

const StyledIcon3 = (Icon) =>
  styled(Icon)`
    width: 22px;
    height: 22px;
    color: #fff;
    transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
  `;
export const AiFillGithubs3 = StyledIcon3(AiFillGithub);
export const ImHtmlFive23 = StyledIcon3(ImHtmlFive2);
export const TbBrandCss33 = StyledIcon3(TbBrandCss3);
export const FaSass3 = StyledIcon3(FaSass);
export const SiMui3 = StyledIcon3(SiMui);
export const SiStyledcomponents3 = StyledIcon3(SiStyledcomponents);
export const SiJavascript3 = StyledIcon3(SiJavascript);
export const FaReact3 = StyledIcon3(FaReact);
export const SiPhp3 = StyledIcon3(SiPhp);
export const GrMysql3 = StyledIcon3(GrMysql);
export const SiFirebase3 = StyledIcon3(SiFirebase);
export const TbBrandRedux3 = StyledIcon3(TbBrandRedux);
export const SiFigma3 = StyledIcon3(SiFigma);
export const GiHamburgerMenu3 = StyledIcon3(AiOutlineMenu);

const StyledIcon4 = (Icon) =>
  styled(Icon)`
    width: 22px;
    height: 22px;
    color: #0d2636;
    transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
  `;

export const AiOutlineHome4 = StyledIcon4(AiOutlineHome);
export const BiBriefcaseAlt24 = StyledIcon4(BiBriefcaseAlt2);
export const MdPerson4 = StyledIcon4(MdPerson);
