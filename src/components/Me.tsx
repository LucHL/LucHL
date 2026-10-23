import { useState } from 'react';
import { Container, Typography, Box, Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import CloseIcon from '@mui/icons-material/Close';

export default function Me() {
    const { t } = useTranslation();
    const [openCv, setOpenCv] = useState(false);

    const handleOpenCv = () => setOpenCv(true);
    const handleCloseCv = () => setOpenCv(false);

    return (
        <Box 
            id="me"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                py: 4
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        p: { xs: 4, sm: 6 },
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: '#ffffff',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                            fontSize: { xs: '2rem', sm: '3rem' }
                        }}
                    >
                        {t('menu.title')}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.85)',
                            lineHeight: 1.6,
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        {t('menu.subtitle')}
                    </Typography>

                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href="https://github.com/LuchL"
                            target="_blank"
                            sx={{
                                color: '#ffffff',
                                borderColor: 'rgba(255, 255, 255, 0.4)',
                                '&:hover': {
                                    borderColor: '#ffffff',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
                        >
                            GitHub
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<DescriptionIcon />}
                            onClick={handleOpenCv}
                            sx={{
                                backgroundColor: '#90caf9',
                                color: '#0a192f',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#64b5f6',
                                }
                            }}
                        >
                            {t('menu.cvButton')}
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* MODALE CV */}
            <Dialog
                open={openCv}
                onClose={handleCloseCv}
                maxWidth="md"
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: 'rgba(18, 18, 24, 0.95)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            color: '#ffffff',
                            borderRadius: 3,
                            height: '85vh'
                        }
                    }
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#90caf9' }}>
                        {t('menu.cv')}
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseCv}
                        sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': { color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers sx={{ p: 0, borderColor: 'rgba(255, 255, 255, 0.1)', overflow: 'hidden' }}>
                    <iframe
                        src={`${import.meta.env.BASE_URL}cv/CV_LUC_HELMLINGER_EN.pdf`}
                        title="CV"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
}
