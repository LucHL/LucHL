import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

export default function ProjectDetail() {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        import(`../content/projects/${id}.${i18n.language}.md`)
            .then((res) => fetch(res.default))
            .then((res) => {
                if (!res.ok) throw new Error('Not found');
                return res.text();
            })
            .then((text) => {
                setContent(text);
                setLoading(false);
            })
            .catch(() => {
                setContent(`# ${t('common.error') || 'Projet introuvable'}\n\nImpossible de charger le contenu pour le moment.`);
                setLoading(false);
            });
    }, [id, i18n.language]);

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Button
                component={Link}
                to="/" 
                startIcon={<ArrowBackIcon />}
                variant="outlined" 
                sx={{ mb: 4 }}
            >
                {t('common.back')}
            </Button>

            <Box
                sx={{
                    '& h1': { fontWeight: 'bold', mb: 2, fontSize: '2.5rem' },
                    '& h2': { fontWeight: 'bold', mt: 4, mb: 2, fontSize: '1.75rem' },
                    '& h3': { fontWeight: 'bold', mt: 3, mb: 1, fontSize: '1.25rem' },
                    '& p': { color: 'text.secondary', lineHeight: 1.7, mb: 2 },
                    '& img': {
                        width: '100%',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        my: 3,
                        boxShadow: 2
                    },
                    '& pre': {
                        p: 2.5,
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        overflowX: 'auto',
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        my: 3
                    },
                    '& code': { fontFamily: 'monospace' }
                }}
            >
                {loading ? (
                    <Typography color="text.secondary">{t('common.loading')}</Typography>
                ) : (
                    <ReactMarkdown>{content}</ReactMarkdown>
                )}
            </Box>
        </Container>
    );
}
