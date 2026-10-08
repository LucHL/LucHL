import { Box, Divider } from '@mui/material';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Me from '../components/Me';

export default function Home() {
    return (
        <Box>
            {/* Profile */}
            <Me />

            <Divider />

            {/* Projects list */}
            <Projects />

            <Divider />

            {/* Educations list */}
            <Education />

            {/* Experiences list */}
            <Experience />

            <Divider />

            {/* Contact */}
            <Contact />
            
        </Box>
    );
}
