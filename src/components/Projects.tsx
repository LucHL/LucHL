import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projectsData';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 8 }} id="projects">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    {t('projectsSection.title')}
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 2 }}>
                                <CardContent>
                                    <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold' }}>
                                        {t(`projectsSection.${project.id}.role`)}
                                    </Typography>
                                    <Button
                                        href={`/project/${project.id}`}
                                        sx={{
                                            color: 'inherit',
                                            p: 0,
                                            minWidth: 0,
                                            display: 'block',
                                            textAlign: 'left',
                                            '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
                                        }}
                                    >
                                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            {project.title}
                                        </Typography>
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(`projectsSection.${project.id}.description`)}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                        {project.stack.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" variant="outlined" />
                                        ))}
                                    </Box>
                                </CardContent>
                                <Box sx={{ p: 2, pt: 0 }}>
                                    {project.githubUrl && (
                                        <Button size="small" startIcon={<GitHubIcon />} href={project.githubUrl} target="_blank">
                                            {t('projectsSection.sourceCode')}
                                        </Button>
                                    )}
                                    {project.isPrivate && (
                                        <Button size="small" disabled variant="text">
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
