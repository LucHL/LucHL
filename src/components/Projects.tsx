import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projectsData';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 8 }} id="projects">
                <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        textAlign: 'center',
                        color: '#ffffff',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {t('projectsSection.title')}
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justify: 'space-between',
                                    backgroundColor: 'rgba(18, 18, 24, 0.87)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
                                        backgroundColor: 'rgba(26, 26, 36, 0.92)',
                                    }
                                }}
                            >
                                <CardContent>
                                    <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#90caf9', letterSpacing: 0.5 }}>
                                        {t(`projectsSection.${project.id}.role`)}
                                    </Typography>

                                    {/* Title */}
                                    <Button
                                        href={`/project/${project.id}`}
                                        sx={{
                                            color: '#ffffff',
                                            p: 0,
                                            minWidth: 0,
                                            display: 'block',
                                            textAlign: 'left',
                                            textTransform: 'none',
                                            '&:hover': { backgroundColor: 'transparent', color: '#90caf9' }
                                        }}
                                    >
                                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 0.5 }}>
                                            {project.title}
                                        </Typography>
                                    </Button>

                                    {/* Description */}
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', mt: 1, lineHeight: 1.6 }}>
                                        {t(`projectsSection.${project.id}.description`)}
                                    </Typography>

                                    {/* Stack */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5 }}>
                                        {project.stack.map((tech) => (
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
                                </CardContent>

                                {/* Link to Github */}
                                <Box
                                    sx={{
                                        p: 2,
                                        pt: 0,
                                        mt: 'auto',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {project.githubUrl && (
                                        <Button 
                                            size="small" 
                                            startIcon={<GitHubIcon />} 
                                            href={project.githubUrl} 
                                            target="_blank"
                                            sx={{
                                                color: '#ffffff',
                                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                                '&:hover': {
                                                    borderColor: '#ffffff',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                                                }
                                            }}
                                        >
                                            {t('projectsSection.sourceCode')}
                                        </Button>
                                    )}
                                    {project.isPrivate && (
                                        <Button
                                            size="small"
                                            disabled
                                            variant="outlined"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.35) !important' 
                                            }}
                                        >
                                            {t('projectsSection.privateRepo')}
                                        </Button>
                                    )}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
