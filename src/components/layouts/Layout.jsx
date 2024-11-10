import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';

const Layout = ({ children, header = true, footer = true, scrollTopButton = true }) => {
    return (
        <>
            {header && <Header />}
            {children}
            {footer && <Footer />}
            {scrollTopButton && <ScrollTopButton />}
        </>
    );
}

// Define prop types for Layout
Layout.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.bool,
    footer: PropTypes.bool,
    scrollTopButton: PropTypes.bool,
};

export default Layout;
