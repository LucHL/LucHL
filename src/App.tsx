import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function Layout() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                color: '#ffffff'
            }}
        >
            <CssBaseline />

            {/* Background Image */}
            <Box
                component="img"
                src={`${import.meta.env.BASE_URL}background/menu.png`}
                alt="Background Menu Entropy Loop"
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                    pointerEvents: 'none',
                    filter: 'brightness(0.65)',
                }}
            />

            {/* Navigation Bar */}
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}

function App() {
    return (
        <BrowserRouter basename="/LucHL">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
