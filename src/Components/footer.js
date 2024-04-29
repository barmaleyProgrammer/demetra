const Footer = () => {

    return (
        <footer>
            <div className="w-1/2 p-8 text-xs">
                    <div className="text-xs font-light">
                        <p> © { new Date().getFullYear() } demetra.fish</p>
                        <p>Всі права захищені</p>
                    </div>
                    <div className="font-light">
                        barmaley_dev
                    </div>
            </div>
        </footer>
    );
}
export default Footer;
