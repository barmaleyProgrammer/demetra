import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <footer>
            <div className="w-1/2 mx-8 p-8">
                    <div className="mb-1 mt-1 text-xs font-light">
                        <p>demetra.fish © { new Date().getFullYear() }</p>
                        <p>Всі права захищені</p>
                    </div>
            </div>
        </footer>
    );
}
export default Footer;
