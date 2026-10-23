import { Box } from '@mui/material';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Me from '../components/Me';
import CustomDivider from '../components/CustomDivider';

export default function Home() {
    return (
        <Box>
            {/* Profile */}
            <Me />

            {/* Projects list */}
            <Projects />

            <CustomDivider />

            {/* Educations list */}
            <Education />

            <CustomDivider />

            {/* Experiences list */}
            <Experience />

            <CustomDivider />

            {/* Contact */}
            <Contact />
            
        </Box>
    );
}
