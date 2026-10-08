import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Me() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {t('menu.title')}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {t('menu.subtitle')}
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/LuchL" target="_blank">
                        GitHub
                    </Button>
                    <Button variant="contained" startIcon={<DescriptionIcon />} href="#contact">
                        {t('menu.cvButton')}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
