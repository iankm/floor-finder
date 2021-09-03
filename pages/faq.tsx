// Imports
import Link from 'next/link'; // Routing
import Layout from '@components/Layout'; // Layout wrapper
import styles from '@styles/pages/FAQ.module.scss'; // Page styles

// Types
import type { ReactElement } from 'react';

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is Enchants?</h3>
          <p>
            Enchants is a derivative collection of 8,000 unique meals comprised
            of adventurer Enchants, based on the original Loot release released
            by{' '}
            <a
              href='https://twitter.com/dhof/status/1431316631934967815'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dom Hofmann
            </a>
            . At release, anyone could claim meals for just gas, and all meals
            were claimed in under 4 hours. Each loot meal contains 8 items: a
            piece for an adventurer&apos;s chest, foot, hand, head, neck, ring,
            waist, and weapon.
          </p>
          <p>
            Enchants is an unaudited project. Meals #1 to #7777 were claimable
            by anyone and #7778 to #8000 are currently reserved for the contract
            deployer.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Why is Enchants special?</h3>
          <p>It is not.</p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>Can I build with Enchants?</h3>
          <p>
            Yes, you are free to use Enchants in any way you want. For
            inspiration, see existing{' '}
            <Link href='/resources'>
              <a>resources</a>
            </Link>{' '}
            put together by the Loot community.
          </p>
        </div>

        {/* Am I priced out of loot? */}
        <div className={styles.faq__item}>
          <h3>Am I priced out of loot?</h3>
          <p>
            Not at all. Through{' '}
            <a
              href='https://twitter.com/dhof/status/1433110412187287560?s=20'
              target='_blank'
              rel='noopener noreferrer'
            >
              Synthetic Loot
            </a>
            , all addresses have access to virtual Loot that developers can
            integrate into the Loot projects they build.
          </p>
          <p>
            Thus, anyone with an Ethereum wallet is allowed to participate in
            the ecosystem, while still maintaining distinction between original
            Loot and synthetics.
          </p>
        </div>

        {/* How do I value loot bags? */}
        <div className={styles.faq__item}>
          <h3>How do I value meals?</h3>
          <p>
            They say that value is always in the eye of the beholder. Loot is no
            different, with no explicit rarities specified at launch. How you
            value a meal is up to you.
          </p>
          <p>
            Still, the community has begun to devise many mechanisms by which to
            assess the rarity of meals and their items. Some of these include{' '}
            <a
              href='https://github.com/Anish-Agnihotri/dhof-loot/blob/master/output/rare.json'
              target='_blank'
              rel='noopener noreferrer'
            >
              rarity by occurence
            </a>{' '}
            or{' '}
            <a
              href='https://0xinventory.app/help'
              target='_blank'
              rel='noopener noreferrer'
            >
              item score
            </a>
            .
          </p>
          <p>Remember, use your own discretion when valuing a meal.</p>
        </div>
      </div>
    </Layout>
  );
}
