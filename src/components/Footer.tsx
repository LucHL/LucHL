import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                mt: 'auto',
                backgroundColor: 'rgba(18, 18, 24, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} Luc HELMLINGER - all rights reserved.
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display:'block', mt: 1 }}>
                    Developed with React, TypeScript, and Material-UI - Hosted on GitHub Pages.
                </Typography>
            </Container>
        </Box>
    );
}
