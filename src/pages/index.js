import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Create',
    imageUrl: 'img/easy-to-use.png',
    description: (
      <>
        Develop applications using existing development skills, languages, and tools. Start with simple application hosting and grow into
        micro-frontend architectures.
      </>
    ),
  },
  {
    title: 'Deploy',
    imageUrl: 'img/focus-on-what-matters.png',
    description: (
      <>Deploy applications, secure user experiences, and automate developer workflows. We’ll do the heavy lifting, try it for free.</>
    ),
  },
  {
    title: 'Monetize',
    imageUrl: 'img/iot-accelerated.png',
    description: (
      <>
        Lock down features with licenses and billing and automated entrprise scaling. 
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Home`} description="LowCodeUnit">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
              to={siteConfig.url + useBaseUrl('dashboard/')}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
