
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';
// import ScrollToTop from './Components/scrollToTop';

const App = () => {
    return (
        <div className="app">
                <BrowserRouter>
                    {/*<ScrollToTop />*/}
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
        </div>
    );
};

export default App;
