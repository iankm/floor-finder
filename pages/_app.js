// Imports
import '@styles/global.scss';

// Types
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from '../theme';

const theme = extendTheme(customTheme);

// Export application
export default function FloorFinder({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
