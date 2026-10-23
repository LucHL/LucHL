import { Container, Typography, Box, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { educations } from '../data/educationData';

export default function Education() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="md" sx={{ py: 8 }} id="education">
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        mb: 6,
                        textAlign: 'center',
                        color: '#ffffff',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {t('educationSection.title')}
                </Typography>

                <Box
                    sx={{
                        position: 'relative',
                        pl: { xs: 3, sm: 4 },
                        borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4
                    }}
                >
                    {educations.map((edu) => (
                        <Box
                            key={edu.id}
                            sx={{
                                position: 'relative',
                                backgroundColor: 'rgba(18, 18, 24, 0.85)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: 2,
                                p: 3,
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                                transition: 'border-color 0.3s ease',
                                '&:hover': {
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }
                            }}
                        >

                            {/* Circle Timeline */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: '-32px', sm: '-41px' },
                                    top: '28px',
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    backgroundColor: '#90caf9',
                                    border: '3px solid #121218',
                                    boxShadow: '0 0 10px rgba(144, 202, 249, 0.5)'
                                }}
                            />

                            {/* Logo + Name & Major */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                                <Box
                                    component="img"
                                    src={`${import.meta.env.BASE_URL}background/${edu.logoUrl}.png`}
                                    alt={edu.schoolName}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        objectFit: 'contain',
                                        borderRadius: '50%',
                                        backgroundColor: '#ffffff',
                                        p: 0.5,
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}
                                    onError={(e: any) => {
                                        e.target.style.display = 'none';
                                    }}
                                />

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2, color: '#ffffff' }}>
                                        {t(`educationSection.${edu.id}.degree`)}
                                    </Typography>
                                    <Typography variant="caption" sx={{ fontWeight: '600', color: '#90caf9', display: 'block', mt: 0.5 }}>
                                        {t(`educationSection.${edu.id}.period`)}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Description */}
                            <Typography variant="body2" sx={{ mt: 0.5, color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6 }}>
                                {t(`educationSection.${edu.id}.description`)}
                            </Typography>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                {edu.stack && edu.stack.map((tech) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        size="small"
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            border: '1px solid rgba(255, 255, 255, 0.15)',
                                            fontSize: '0.75rem'
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
