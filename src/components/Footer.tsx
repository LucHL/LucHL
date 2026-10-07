import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 4, backgroundColor: 'background.paper', borderTop: 1, borderColor: 'divider', mt: 'auto' }}>
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
