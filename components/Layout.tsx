// Imports
import Link from 'next/link'; // Routing
import { useRouter } from 'next/router'; // Routing
import { default as HTMLHead } from 'next/head'; // Meta
import styles from '@styles/components/Layout.module.scss'; // Styles

// Types
import type { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <Box
      w='100%'
      h='100%'
      bgGradient='linear(to-br, yellow.100 0%, blue.100 100%)'
    >
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

      {/* Page content */}
      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
      <Footer />
    </Box>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>Enchants</title>
      <meta name='title' content='Enchants' />
      <meta
        name='description'
        content='Enchants is a collection of randomized tomes for curious adventurers generated
        and stored on chain.'
      />

      {/* OG + Faceook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://floorfinder.vercel.app/' />
      <meta property='og:title' content='Enchants' />
      <meta
        property='og:description'
        content='Enchants is a collection of randomized tomes for curious adventurers generated
        and stored on chain.'
      />
      <meta
        property='og:image'
        content='https://floorfinder.vercel.app/meta.png'
      />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:url'
        content='https://www.floorfinder.vercel.app/'
      />
      <meta property='twitter:title' content='Enchants' />
      <meta
        property='twitter:description'
        content='Enchants is a collection of randomized tomes for curious adventurers generated
        and stored on chain.'
      />
      <meta
        property='twitter:image'
        content='https://Enchantsproject.com/meta.png'
      />

      {/* Font */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href='https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap'
        rel='stylesheet'
      />
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();
  // All links
  const links = [
    { name: 'Github', path: 'https://github.com/iankm/floor-finder' },
  ];

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href='/'>
          <a target='_blank' rel='noreferrer'>
            🧹
          </a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                          styles.header__links_active
                        : undefined
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <p>
        This website is made with{' '}
        <a
          href='https://github.com/lootproject/website'
          target='_blank'
          rel='noopener noreferrer'
        >
          open-source
        </a>{' '}
        software.
      </p>
    </div>
  );
}
