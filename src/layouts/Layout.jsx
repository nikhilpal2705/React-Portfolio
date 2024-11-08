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

export default Layout