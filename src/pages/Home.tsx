import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
    return (
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Hero />

            <div id="about">
                <About />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="projects">
                <Projects />
            </div>

            <div id="experience">
                <Experience />
            </div>

            <div id="contact">
                <Contact />
            </div>
        </main>
    );
};