import { Box, Divider } from '@mui/material';

export default function CustomDivider() {
    return (
        <Divider
            sx={{
                my: 6,
                border: 'none',
                '&::before, &::after': {
                    content: '""',
                    height: '1px',
                    border: 'none',
                },
                '&::before': {
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(144, 202, 249, 0.6) 100%)',
                },
                '&::after': {
                    background: 'linear-gradient(90deg, rgba(144, 202, 249, 0.6) 0%, rgba(255, 255, 255, 0) 100%)',
                }
            }}
        >
            <Box
                sx={{
                    width: 8,
                    height: 8,
                    bgcolor: '#90caf9',
                    transform: 'rotate(45deg)',
                    boxShadow: '0 0 10px #90caf9',
                    mx: 1,
                }}
            />
        </Divider>
    )
}
