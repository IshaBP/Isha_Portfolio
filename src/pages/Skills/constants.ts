import { ReactComponent as Bitbucket } from '../../assets/bitbucket (1).svg';
import { ReactComponent as Confluence } from '../../assets/confluence.svg';
import { ReactComponent as CSS } from '../../assets/css.svg';
import { ReactComponent as Figma } from '../../assets/figma.svg';
import { ReactComponent as Git } from '../../assets/git.svg';
import { ReactComponent as HTML } from '../../assets/html.svg';
import { ReactComponent as JavaScript } from '../../assets/javascript (1).svg';
import { ReactComponent as JIRA } from '../../assets/jira.svg';
import { ReactComponent as Netlify } from '../../assets/netlify.svg';
import { ReactComponent as React } from '../../assets/react.svg';
import { ReactComponent as Redux } from '../../assets/redux.svg';
import { ReactComponent as SASS } from '../../assets/sass.svg';
import { ReactComponent as TypeScript } from '../../assets/typescript.svg';

// import { ListConfig } from '../../components/ListContainer/types';

// const SKILLS_GROUPS: Array<ListConfig> = [
const SKILLS_GROUPS: Array<any> = [
	{
		title: "Technologies",
		listItems: [
			{
				name: "JavaScript",
				logo: JavaScript,
			},
			{
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				name: "React",
				logo: React,
			},
			{
				name: "Redux",
				logo: Redux,
			},
			{
				name: "CSS",
				logo: CSS,
			},
			{
				name: "SASS",
				logo: SASS,
			},
			{
				name: "HTML",
				logo: HTML,
			},
		],
	},
	{
		title: "Tools",
		listItems: [
			{
				name: "Git",
				logo: Git,
			},
			{
				name: "JIRA",
				logo: JIRA,
			},
			{
				name: "Confluence",
				logo: Confluence,
			},
			{
				name: "Bitbucket",
				logo: Bitbucket,
			},
			{
				name: "Netlify",
				logo: Netlify,
			},
			{
				name: "Figma",
				logo: Figma,
			},
		],
	},
];

export default SKILLS_GROUPS;
