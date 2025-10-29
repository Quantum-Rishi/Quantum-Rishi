import React, { ReactNode } from 'react';
import Navigation from '../../components/Navigation.tsx';
import '../../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
