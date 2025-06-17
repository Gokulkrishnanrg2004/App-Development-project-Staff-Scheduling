import React from 'react';
import Footer from './Footer';

// Layout component with an additional prop to control footer display
const Layout = ({ children, showFooter = true }) => {
  return (
    <div style={LayoutStyle}>
      <main style={ContentStyle}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

const LayoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const ContentStyle = {
  flex: '1'
};

export default Layout;
