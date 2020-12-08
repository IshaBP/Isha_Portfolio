import NavObject from './components/Navigation/types';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

const NAV_ITEMS: Array<NavObject> = [
  { section: "Home", path: "/", component: Home },
  { section: "About", path: "/about", component: About } /* Text + Timeline */,
  { section: "Skills", path: "/skills", component: Skills },
  { section: "Projects", path: "/projects", component: Projects },
  { section: "Contact", path: "/contact", component: Contact }
];

export { NAV_ITEMS };
