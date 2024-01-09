import { defaultTheme } from 'react-admin';

export enum AppColors {
  main = '#085173',
  darkMain = '#f3495a',
  secondary = '#E9623F',
  hover = '#f0f0f0',
  selectedToggleButton = '#DA5B61',
  white = '#FFFFFF',
  black = '#000000',
  grey = '#d7d7d7',
  dark_grey = '#545454',
  dark = '#121212',
  blue = '#085173'
}

const customePalette = {
  primary: {
    main: AppColors.main,
    dark: AppColors.darkMain,
  },
  secondary: {
    main: AppColors.secondary,
    contrastText: AppColors.white,
  },
};

export const mkLabDarkTheme = {
  palette: {
    ...customePalette,
    background: {
      default: AppColors.dark,
    },
    mode: 'dark' as const,
  },
  shape: {
    borderRadius: 5,
  },
  sidebar: {
    width: 250,
    minWidth: 50,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          color: AppColors.white,
          backgroundColor: AppColors.dark,
          '&.RaMenuItemLink-active': {
            color: AppColors.main,
            backgroundColor: AppColors.hover,
            '& .RaMenuItemLink-icon': {
              color: AppColors.main,
            },
          },
          '&:hover': {
            color: AppColors.main,
            backgroundColor: AppColors.hover,
            '& .RaMenuItemLink-icon': {
              color: AppColors.main,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: AppColors.white,
          backgroundColor: AppColors.black,
        },
      },
    },
  },
};

// default theme
export const mkLabLightTheme = {
  palette: {
    ...customePalette,
    background: {
      default: AppColors.white,
    },
    mode: 'light' as const,
  },
  shape: {
    borderRadius: 5,
  },
  sidebar: {
    width: 300,
    minWidth: 60,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          color: AppColors.dark_grey,
          backgroundColor: AppColors.white,
          '&.RaMenuItemLink-active': {
            color: AppColors.main,
            backgroundColor: AppColors.hover,
            '& .RaMenuItemLink-icon': {
              color: AppColors.main,
            },
          },

          '&:hover': {
            color: AppColors.main,
            backgroundColor: AppColors.hover,
            '& .RaMenuItemLink-icon': {
              color: AppColors.main,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: AppColors.white,
          backgroundColor: AppColors.blue,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          '& .column-header': {
            color: AppColors.white,
            backgroundColor: AppColors.main,
          },
          '& .column-header-center': {
            color: AppColors.white,
            backgroundColor: AppColors.main,
            paddingLeft: '4rem',
            wordSpacing: '7rem',
          },
          '& .highlight-red-row ': {
            backgroundColor: '#FFE4E4',
          },
          '& .highlight-red-row:hover': {
            backgroundColor: '#FFC2C2',
          },
          '& .highlight-green-row': {
            backgroundColor: '#D6FFDA',
          },
          '& .highlight-green-row:hover': {
            backgroundColor: '#A0FFB3',
          },
          '& .plus-one-cell': {
            backgroundColor: '#FFF3B2',
          },
          '& .plus-one-cell:hover': {
            backgroundColor: '#FFEEA0',
          },
          '& .MuiDataGrid-main': {
            overflow: 'unset',
          },
          '& .MuiDataGrid-columnHeaders': {
            position: 'sticky',
            top: 0,
            zIndex: 4,
          },
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: AppColors.main,
            color: AppColors.white,
            fontWeight: 'bold',
          },
          '& .MuiTableRow-root.MuiTableRow-hover:hover': {
            backgroundColor: AppColors.hover,
          },
          '& .MuiButtonBase-root.MuiTableSortLabel-root': {
            color: 'white',
          },
          '& .MuiButtonBase-root.MuiTableSortLabel-root .MuiTableSortLabel-icon': {
            color: 'white',
          },
        },
      },
    },
    RaLoadingIndicator: {
      styleOverrides: {
        root: {
          display: 'none',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '& .MuiToggleButtonGroup-grouped': {
            color: AppColors.main,
            border: `solid 2px ${AppColors.main}`,
            textTransform: 'none',
          },
          '.MuiToggleButtonGroup-grouped.Mui-selected': {
            color: AppColors.white,
            backgroundColor: AppColors.selectedToggleButton,
          },
          '.MuiToggleButtonGroup-grouped.Mui-selected:hover': {
            color: AppColors.white,
            backgroundColor: AppColors.selectedToggleButton,
          },
        },
      },
    },
  },
};
