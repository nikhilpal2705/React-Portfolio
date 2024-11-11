import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';
import { Outlet } from 'react-router-dom';

const Layout = ({ header = true, footer = true, scrollTopButton = true }) => {
    return (
        <>
            {header && <Header />}
            <Outlet />
            {footer && <Footer />}
            {scrollTopButton && <ScrollTopButton />}
        </>
    );
}

// Define prop types for Layout
Layout.propTypes = {
    header: PropTypes.bool,
    footer: PropTypes.bool,
    scrollTopButton: PropTypes.bool,
};

export default Layout;
