import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f1f1f1', // Soft light grey for the overall background
      paper: '#ffffff',   // White background for cards and modals
    },
    primary: {
      main: '#1976d2',     // Deep blue for primary actions
      contrastText: '#fff' // White text for contrast
    },
    secondary: {
      main: '#ffd700',     // Gold for secondary actions (luxurious accent)
      contrastText: '#fff' // White text for contrast
    },
    text: {
      primary: '#212121',  // Dark grey for primary text
      secondary: '#757575', // Medium grey for secondary text
    },
    action: {
      active: '#1976d2',    // Blue active state for icons
    },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`, // A clean, professional sans-serif font
    h1: {
      fontWeight: 700,
      fontSize: '3.2rem',
      color: '#1976d2',   // Deep blue for primary heading
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#212121',   // Dark grey for secondary heading
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#ffd700',   // Gold for tertiary heading to add contrast
    },
    body1: {
      fontSize: '1rem',
      color: '#212121', // Dark grey for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#757575', // Medium grey for smaller body text
    },
    button: {
      textTransform: 'none', // Keep button text readable (not uppercase)
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for a modern appearance
          padding: '12px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)', // Subtle shadow on hover
            transform: 'scale(1.05)', // Slight scaling effect on hover
          },
        },
        containedPrimary: {
          backgroundColor: '#1976d2', // Deep blue for primary button
          '&:hover': {
            backgroundColor: '#1565c0', // Darker blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#ffd700', // Gold for secondary button
          '&:hover': {
            backgroundColor: '#ffb300', // Darker gold on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Rounded corners for a sleek card design
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for cards
          padding: '25px',
          backgroundColor: '#ffffff', // Clean white background
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '10px', // Rounded text fields for a modern touch
            backgroundColor: '#f1f1f1', // Light grey background for text fields
            color: '#212121', // Dark text inside text fields
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& th': {
            backgroundColor: '#f5f5f5', // Light grey for table headers
            color: '#212121', // Dark grey for header text
            fontWeight: 600,
          },
          '& td': {
            color: '#757575', // Medium grey for table data
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2', // Deep blue background for app bar
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for app bar
        },
      },
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners for all components
  },
  shadows: [
    'none',
    '0px 6px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for components
    // Add more shadows as needed
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
