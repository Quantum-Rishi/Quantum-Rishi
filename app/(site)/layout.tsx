import React from 'react';
import Navigation from '../../components/Navigation';
import '../../styles/globals.css';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
