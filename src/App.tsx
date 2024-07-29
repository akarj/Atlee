// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RegisterForm from '@pages/Register';
// import './App.css';
// import LoginForm from '@pages/Login';
// import HomePage from '@pages/Home';
// import { AnimatePresence } from 'framer-motion';

// const App: React.FC = () => {
//     return (
//         <>
//             <Router>
//                 <AnimatePresence mode="wait">
//                     <Routes>
//                         <Route path="/" element={<HomePage />} />
//                         <Route path="/login" element={<LoginForm />} />
//                         <Route path="/register" element={<RegisterForm />} />
//                     </Routes>
//                 </AnimatePresence>
//             </Router>
//         </>
//     );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './pages/Register';
import LoginForm from './pages/Login';
import HomePage from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
};

export default App;
