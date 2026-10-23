import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box, List, ListItem, ListItemButton, ListItemText, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

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
                setContent(`# ${t('common.error')}\n\n${t('common.undefinedproject')}`);
                setLoading(false);
            });
    }, [id, i18n.language]);

    const toc = useMemo<TocItem[]>(() => {
        if (!content) return [];
        const headingLines = content.match(/^#{1,3}\s+.+$/gm) || [];
        return headingLines.map((line) => {
            const level = line.match(/^#+/)?.[0].length || 1;
            const text = line.replace(/^#+\s+/, '').trim();
            const id = text
                .toLowerCase()
                .replace(/[^\w\u00C0-\u024F\s-]/g, '')
                .replace(/\s+/g, '-');
            return { id, text, level };
        });
    }, [content]);

    const scrollToHeading = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                py: 6,
                backdropFilter: 'blur(24px) brightness(0.6)',
                WebkitBackdropFilter: 'blur(24px) brightness(0.6)',
            }}
        >
            <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>

                {/* Btn Back */}
                <Button
                    component={Link}
                    to="/"
                    startIcon={<ArrowBackIcon />}
                    variant="outlined" 
                    sx={{
                        mb: 4,
                        color: '#ffffff',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        '&:hover': {
                            borderColor: '#ffffff',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)'
                        }
                    }}
                >
                    {t('common.back')}
                </Button>

                <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                    
                    {/* Summary */}
                    <Box
                        component="nav"
                        sx={{
                            width: 280,
                            flexShrink: 0,
                            display: { xs: 'none', md: 'block' },
                            position: 'sticky',
                            top: 100,
                            backgroundColor: 'rgba(18, 18, 24, 0.85)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: 2,
                            p: 2,
                            maxHeight: 'calc(100vh - 120px)',
                            overflowY: 'auto'
                        }}
                    >

                        {/* Summary Text */}
                        <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 'bold', mb: 1.5, px: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
                            {t('common.summary')}
                        </Typography>

                        {/* Summary List */}
                        <List dense disablePadding>
                            {toc.map((item) => (
                                <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                                    <ListItemButton
                                        onClick={() => scrollToHeading(item.id)}
                                        sx={{
                                            borderRadius: 1,
                                            pl: (item.level - 1) * 2 + 1,
                                            py: 0.5,
                                            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                                        }}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{
                                                        fontSize: item.level === 1 ? '0.9rem' : '0.8rem',
                                                        fontWeight: item.level === 1 ? 'bold' : 'normal',
                                                        color: item.level === 1 ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                >
                                                    {item.text}
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Project Data */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            width: '100%',
                            backgroundColor: 'rgba(18, 18, 24, 0.92)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: 3,
                            p: { xs: 3, sm: 6 },
                            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
                            color: '#ffffff',
                            '& h1': {
                                fontWeight: 'bold',
                                mb: 3,
                                fontSize: '2.25rem',
                                color: '#ffffff',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                                pb: 1.5
                            },
                            '& h2': {
                                fontWeight: 'bold',
                                mt: 5,
                                mb: 2,
                                fontSize: '1.6rem',
                                color: '#90caf9',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                                pb: 1
                            },
                            '& h3': {
                                fontWeight: 'bold',
                                mt: 4,
                                mb: 1.5,
                                fontSize: '1.25rem',
                                color: 'rgba(255, 255, 255, 0.9)'
                            },
                            '& p': {
                                color: 'rgba(255, 255, 255, 0.8)',
                                lineHeight: 1.8,
                                mb: 2.5,
                                fontSize: '1rem'
                            },
                            '& li': {
                                color: 'rgba(255, 255, 255, 0.8)',
                                lineHeight: 1.7,
                                mb: 1
                            },
                            '& img': {
                                width: '100%',
                                height: 'auto',
                                maxHeight: '70vh',
                                objectFit: 'contain',
                                borderRadius: 2,
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                my: 3,
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)'
                            },
                            '& pre': {
                                p: 2.5,
                                borderRadius: 2,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                overflowX: 'auto',
                                fontFamily: 'monospace',
                                fontSize: '0.9rem',
                                my: 3
                            },
                            '& code': {
                                fontFamily: 'monospace'
                            },
                            '& blockquote': {
                                my: 3,
                                mx: 0,
                                p: 2,
                                px: 3,
                                backgroundColor: 'rgba(144, 202, 249, 0.08)',
                                borderLeft: '4px solid #90caf9',
                                borderRadius: '0 8px 8px 0',
                                color: '#ffffff',
                                backdropFilter: 'blur(8px)',
                                '& p': {
                                    m: 0,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                },
                                '& strong': {
                                    color: '#90caf9',
                                }
                            },
                        }}
                    >
                        {loading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                                <CircularProgress sx={{ color: '#90caf9' }} />
                            </Box>
                        ) : (
                            <ReactMarkdown
                                components={{
                                    h1: ({ children }) => {
                                        const id = String(children).toLowerCase().replace(/[^\w\u00C0-\u024F\s-]/g, '').replace(/\s+/g, '-');
                                        return <h1 id={id}>{children}</h1>;
                                    },
                                    h2: ({ children }) => {
                                        const id = String(children).toLowerCase().replace(/[^\w\u00C0-\u024F\s-]/g, '').replace(/\s+/g, '-');
                                        return <h2 id={id}>{children}</h2>;
                                    },
                                    h3: ({ children }) => {
                                        const id = String(children).toLowerCase().replace(/[^\w\u00C0-\u024F\s-]/g, '').replace(/\s+/g, '-');
                                        return <h3 id={id}>{children}</h3>;
                                    },

                                    img: ({ src, alt }) => {
                                        if (src?.startsWith('http') || src?.startsWith('blob')) {
                                            return <img src={src} alt={alt || ''} />;
                                        }

                                        const cleanSrc = src?.startsWith('/') ? src.slice(1) : src;
                                        const imageSrc = `${import.meta.env.BASE_URL}${cleanSrc}`;

                                        return <img src={imageSrc} alt={alt || ''} />;
                                    },

                                    // Put color when the text is Code
                                    code({ node, inline, className, children, ...props }: any) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                customStyle={{
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                                    margin: '1.5rem 0',
                                                    backgroundColor: 'rgba(10, 10, 15, 0.85)'
                                                }}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    padding: '0.2rem 0.4rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.875em'
                                                }}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        );
                                    }
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
