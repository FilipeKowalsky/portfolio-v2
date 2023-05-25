import { BannerSection } from './section/BannerSec/BannerSection';
import { AbountMeSection } from './section/AboutSec/AboutMeSection';
import { Projects } from "./section/ProjectSec/ProjectsSection";
import { TechSection } from "./section/TechSec/TechSection";

export const Main = () => {
  return(
    <main>
      <BannerSection/>
      <AbountMeSection/>
      <TechSection/>
      <Projects/>
    </main>
  )
}