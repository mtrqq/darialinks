import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import QrGenerator from '@site/src/components/QrGenerator';
import Header from '@site/src/components/Header';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`DariaLinks`}
      description="Simple QR Code generator">
      <Header />
      <main style={{ marginTop: '2rem' }}>
        <QrGenerator />
      </main>
    </Layout>
  );
}
