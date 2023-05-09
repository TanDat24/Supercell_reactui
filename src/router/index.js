//Layout
import { FooterOnly } from "~/components/Layout";

import Supercell from "~/Pages/Supercell";
import Games from "~/Pages/Games";
import Careers from "~/Pages/Careers";
import Support from "~/Pages/Support";
import About_us from "~/Pages/About us";
import Creators from "~/Pages/Creators";
import Makers from "~/Pages/Makers";
import ID from "~/Pages/ID";

//Public Routs
const publicRouters = [
  { path: "/", component: Supercell },
  { path: "/games", component: Games },
  { path: "/careers", component: Careers },
  { path: "/support", component: Support },
  { path: "/about_us", component: About_us },
  { path: "/creators", component: Creators, layout: FooterOnly },
  { path: "/makers", component: Makers, layout: FooterOnly },
  { path: "/ID", component: ID },
];

export { publicRouters };
