import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Quiz from '@pages/Quiz';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/*" element={<Quiz />} />
        </Routes>
    </BrowserRouter>
);

export default App;
