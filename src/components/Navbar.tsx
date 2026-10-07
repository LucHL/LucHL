import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'background.paper' }}>
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'lg', width: '100%', mx: 'auto' }}>
                
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}
                >
                    Luc HELMLINGER
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 3 } }}>
                    <Button color="inherit" href="#projects">{t('nav.projects')}</Button>
                    <Button color="inherit" href="#education">{t('nav.education')}</Button>
                    <Button color="primary" variant="contained" href="#contact" size="small">{t('nav.contact')}</Button>
                    
                    <Button 
                        color="inherit"
                        size="small" 
                        startIcon={<LanguageIcon />}
                        onClick={toggleLanguage}
                        sx={{ ml: 1, textTransform: 'uppercase' }}
                    >
                        {i18n.language.startsWith('fr') ? 'EN' : 'FR'}
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    );
}
