// import Navigation from '../Navigation/Navigation';
import About from '../PortfolioContainer/components/About/about';
import Contact from '../PortfolioContainer/components/Contact/Contact';
export const TOTAL_SCREENS = [
  {
    screen_name: "About",
    component: About,
  },

  {
    screen_name: "Contact",
    component: Contact,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};