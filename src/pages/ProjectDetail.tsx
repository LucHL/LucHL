import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ProjectDetail() {
    const { id } = useParams();
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Button component={Link} to="/" variant="outlined" sx={{ mb: 4 }}>
                ← Retour
            </Button>
            
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Projet : {id}
            </Typography>
            
            <Typography variant="body1" color="text.secondary">
                Affichage des détails pour le projet identifié par : <strong>{id}</strong>
            </Typography>
        </Container>
    );
}
