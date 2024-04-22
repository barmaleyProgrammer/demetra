import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <footer>
            <div className="w-[1152px] mx-auto py-6 flex flex-wrap gap-36 items-top justify-between">
                <div className="flex flex-col items-center">
                    <a href="https://komunalka.ua/">
                        {/*<img src={logo_lichylnyk} className="mb-2" alt="kamunalka logo"/>*/}
                    </a>
                    <div className="mb-1 mt-1 text-xs font-light">
                        <p className="mb-2 text-center">barmaley_ua</p>
                        <p>demetra.fish © { new Date().getFullYear() }</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
