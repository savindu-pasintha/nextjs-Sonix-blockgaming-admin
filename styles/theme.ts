import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    drawer: {
      width: number;
    },
  }
  interface ThemeOptions {
    drawer?: {
      width?: number;
    }
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#039be5',
    },
    secondary: {
      main: '#ab47bc',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#42a5f5',
    },
    success: {
      main: '#66bb6a',
    },
    error: {
      main: '#F44336'
    }
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        margin: 'dense',
      },
    },
  },
  drawer: {
    width: 250,
  }
});

export default theme;
