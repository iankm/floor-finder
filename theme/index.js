const customTheme = {
  colors: {
    yellow: {
      50: '#FDFFE5',
      100: '#FAFFB8',
      200: '#F6FF8A',
      300: '#F3FF5C',
      400: '#EFFF2E',
      500: '#ECFF00',
      600: '#BDCC00',
      700: '#8D9900',
      800: '#5E6600',
      900: '#2F3300',
    },
    cyan: {
      50: '#E5FDFF',
      100: '#B8FBFF',
      200: '#8AF8FF',
      300: '#5CF5FF',
      400: '#2EF2FF',
      500: '#00F0FF',
      600: '#00C0CC',
      700: '#009099',
      800: '#006066',
      900: '#003033',
    },
    green: {
      50: '#E7FDF5',
      100: '#BDFAE4',
      200: '#93F6D3',
      300: '#68F3C1',
      400: '#3EEFB0',
      500: '#13EC9F',
      600: '#0FBD7F',
      700: '#0C8D5F',
      800: '#085E3F',
      900: '#042F20',
    },
    gray: {
      50: '#F2F2F2',
      100: '#DBDBDB',
      200: '#C4C4C4',
      300: '#ADADAD',
      400: '#969696',
      500: '#808080',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
      900: '#1A1A1A',
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: '4rem',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'green.100',
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 10px 12.5px -5px, rgba(0, 0, 0, 0.02) 0px 5px 5px -5px',
          _hover: {
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
          },
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
};

export default customTheme;
