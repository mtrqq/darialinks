import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

export default function Header() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/* Adjust the padding here to make it less vertically spacious */}
          <h1 className="hero__title" style={{ padding: '1rem 0' }}>
            Rainbow placeholder
          </h1>
          <p className="hero__subtitle">
            ✨ Generate QR codes effortlessly and with style ✨
          </p>
        </div>
      </header>
    );
  }