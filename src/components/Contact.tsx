import { Container, Typography, Box, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="sm" sx={{ py: 8 }} id="contact">
                <Box
                    sx={{
                        backgroundColor: 'rgba(18, 18, 24, 0.85)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 3,
                        p: { xs: 4, sm: 6 },
                        textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                    }}
                >

                    {/* Title */}
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                        {t('contactSection.title')}
                    </Typography>

                    {/* Descrition */}
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                        {t('contactSection.description')}
                    </Typography>

                    {/* Btn send Email */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Button 
                            variant="contained" 
                            href="mailto:luc.helmlinger@gmail.com" 
                            size="large"
                            startIcon={<EmailIcon />}
                            sx={{
                                backgroundColor: '#90caf9',
                                color: '#0a192f',
                                fontWeight: 'bold',
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontSize: '1rem',
                                boxShadow: '0 4px 14px rgba(144, 202, 249, 0.4)',
                                '&:hover': {
                                    backgroundColor: '#64b5f6',
                                    boxShadow: '0 6px 20px rgba(144, 202, 249, 0.6)',
                                }
                            }}
                        >
                            {t('contactSection.button')}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
