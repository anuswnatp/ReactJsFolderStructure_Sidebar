import React from 'react';
import Sidebar from './Sidebar/sidebar';
import Footer from './Footer/footer';
import Header from './header/header';
import styles from './layoutStyle.module.scss';
import PropTypes from 'prop-types';

function Layout({ children }) {
    return (
        <div className='layout-wrapper p-ripple-disabled'>
            <Sidebar />
            <div className='layout-content'>
                     <Header/>
                <div className={styles.childrenWrapper}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.element.isRequired
  };
