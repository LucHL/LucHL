import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projectsData';
import { experiences } from '../data/experienceData';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Home() {
    const { t } = useTranslation();

    return (
        <Box>
            {/* Me */}
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

            <Divider />

            {/* Projects */}
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
                                        sx={{ color: 'black' }}
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

            <Divider />

            {/* School */}

            {/* TODO VOIR POUR UN AFFICHAGE CENTRÉ AVEC LES BATONS AU CENTRE ! */}
            <Container maxWidth="md" sx={{ py: 8 }} id="education">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    {t('educationSection.title')}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Epitech</Typography>
                        <Typography variant="body2" color="text.secondary">{t('educationSection.epitech')}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Inha University (South Korea)</Typography>
                        <Typography variant="body2" color="text.secondary">{t('educationSection.inha')}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ionis STM</Typography>
                        <Typography variant="body2" color="text.secondary">{t('educationSection.ionisstm')}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lycée Louis Armand</Typography>
                        <Typography variant="body2" color="text.secondary">{t('educationSection.lla')}</Typography>
                    </Box>
                </Box>
            </Container>

            {/* Experience */}

            {/* TODO VOIR POUR UN AFFICHAGE CENTRÉ AVEC LES BATONS AU CENTRE ! */}
            <Container maxWidth="md" sx={{ py: 8 }} id="experience">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                    {t('experienceSection.title')}
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
                    {experiences.map((exp) => (
                        <Box key={exp.id} sx={{ position: 'relative' }}>
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
                                    src={exp.logoUrl}
                                    alt={exp.company}
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
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="caption" color="primary" sx={{ fontWeight: 'medium' }}>
                                        {t(`experienceSection.${exp.id}.period`)}
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mt: 1 }}>
                                {t(`experienceSection.${exp.id}.role`)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                {t(`experienceSection.${exp.id}.description`)}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                {exp.stack.map((tech) => (
                                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>

            <Divider />

            {/* Contact */}
            <Container maxWidth="sm" sx={{ py: 8 }} id="contact">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                    {t('contactSection.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    {t('contactSection.description')}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary" href="mailto:votre.email@example.com" size="large">
                        {t('contactSection.button')}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
