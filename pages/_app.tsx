// Imports
import '@styles/global.scss';

// Types
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from '../theme';

const theme = extendTheme(customTheme);

// Export application
export default function FloorFinder({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
