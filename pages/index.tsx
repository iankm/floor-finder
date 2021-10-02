// Imports
import { useState } from 'react';
import Layout from '@components/Layout'; // Layout wrapper
import styles from '@styles/pages/Home.module.scss'; // Styles
import InputForm from '@components/InputForm';

// Types
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const [fetched, setFetched] = useState(false);
  const [pending, setPending] = useState(false);
  const [summary, setSummary] = useState(null);

  return (
    <Layout>
      <div className={styles.home__cta}>
        {/* CTA title */}
        <h1>Floor Finder</h1>

        {/* CTA Description */}
        <p>
          {' '}
          We all know you would love to see how much your OpenSea collection
          could be sold for RIGHT NOW (not that you would actually do that
          💎🙌).
          <br />
          Click below to get some stats on your precious NFTs.
        </p>
      </div>

      {/* Rendering sample loot bags */}
      <div className={styles.home__feature}>
        <InputForm
          setSummary={setSummary}
          setPending={setPending}
          setFetched={setFetched}
        />
      </div>
    </Layout>
  );
}
