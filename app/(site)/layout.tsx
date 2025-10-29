import React from 'react';
import Navigation from '../../components/Navigation.jsx';
import '../../styles/globals.css';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
