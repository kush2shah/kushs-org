import React from 'react';

import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import NavBar from './NavBar';

import '../css/global/app.scss';
import '../css/global/TopButton.scss';
import 'react-photo-view/dist/react-photo-view.css';

import Home from './Home';

import Photography from "./photography/Photography";
import Published from "./photography/Published";
import Graduation from './photography/Graduation';
import Booking from "./photography/Booking";
import Film from "./photography/Film";
import Digital from "./photography/Digital";
import Aerial from "./photography/Aerial";

import Experience from "./experience/Experience";
import Projects from "./experience/Projects";
import Work from "./experience/Work";
import Education from "./experience/Education";
import Clubs from "./experience/Clubs";

import Info from './Info';

import ChangeLog from './ChangeLog';

import Chat from './gpt/Chat';

import NotFound from './errors/NotFound';

import TableauRedirect from './TableauRedirect';

function RedirectToDataVizMod2() {
    const navigate = useNavigate();
    React.useEffect(() => {
        window.location.href = "https://colab.research.google.com/drive/1jZlqFIYKMHGCoYCdT3DD6tbj19S0aUi5?usp=sharing";
    }, [navigate]);

    return null;
}

function RedirectToCreditCardGuide() {
    const navigate = useNavigate();
    React.useEffect(() => {
        window.location.href = "https://kushah.notion.site/";
    }, [navigate]);

    return null;
}

function App() {
    const [darkMode, setDarkMode] = React.useState(false);
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/photography" element={<Photography/>}/>
                    <Route path="/published" element={<Published/>}/>
                    <Route path="/grad" element={<Graduation/>}/>
                    <Route path="/book" element={<Booking/>}/>
                    <Route path="/film" element={<Film/>}/>
                    <Route path="/digital" element={<Digital/>}/>
                    <Route path="/aerial" element={<Aerial/>}/>

                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/clubs" element={<Clubs/>}/>

                    <Route path="/info" element={<Info/>}/>

                    <Route path="/chat" element={<Chat/>}/>

                    <Route path="*" element={<NotFound/>}/>

                    <Route path="/changelog" element={<ChangeLog/>}/>

                    <Route path="/datavizmod2" element={<RedirectToDataVizMod2 />} />
                    <Route path="/datavizmod3" element={<TableauRedirect />} />
                    <Route path="/cc" element={<RedirectToCreditCardGuide />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
