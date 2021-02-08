import { NavObject } from './components/Navigation/types';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const NAV_ITEMS: Array<NavObject> = [
	{ id: "1", section: "Home", path: "/", component: Home },
	{
		id: "2",
		section: "About",
		path: "/about",
		component: About,
	} /* Text + Timeline */,
	{ id: "3", section: "Skills", path: "/skills", component: Skills },
	// { id: "4", section: "Projects", path: "/projects", component: Projects },
	{ id: "5", section: "Contact", path: "/contact", component: Contact },
];

export { NAV_ITEMS };
