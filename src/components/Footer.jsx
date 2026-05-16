function Footer() {
    return (
        <footer className="footer">
            <div className="footer__right">
                <span className="footer__text">Streetwear for the DIRTY</span>
                <span className="footer__text footer__text_year">&copy; {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}

export default Footer;
