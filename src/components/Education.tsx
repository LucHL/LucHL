import { Container, Typography, Box, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { educations } from '../data/educationData';

export default function Education() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="md" sx={{ py: 8 }} id="experience">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                    {t('educationSection.title')}
                </Typography>

                <Box 
                    sx={{
                        position: 'relative',
                        pl: 4, 
                        borderLeft: '2px solid',
                        borderColor: 'divider',
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 5 
                    }}
                >
                    {educations.map((edu) => (
                        <Box key={edu.id} sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '-33px',
                                    top: '6px',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: 'primary.main',
                                    border: '2px solid',
                                    borderColor: 'background.paper'
                                }}
                            />
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                <Box
                                    component="img"
                                    src={edu.logoUrl}
                                    alt={edu.schoolName}
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        objectFit: 'contain',
                                        borderRadius: '50%',
                                        backgroundColor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        p: 0.5
                                    }}
                                    onError={(e: any) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                                        {t(`educationSection.${edu.id}.degree`)}
                                    </Typography>
                                    <Typography variant="caption" color="primary" sx={{ fontWeight: 'medium' }}>
                                        {t(`educationSection.${edu.id}.period`)}
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mt: 1 }}>
                                {t(`educationSection.${edu.id}.role`)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                {t(`educationSection.${edu.id}.description`)}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                {edu.stack.map((tech) => (
                                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
