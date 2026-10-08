import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="sm" sx={{ py: 8 }} id="contact">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                    {t('contactSection.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    {t('contactSection.description')}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary" href="mailto:luc.helmlinger@gmail.com" size="large">
                        {t('contactSection.button')}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
