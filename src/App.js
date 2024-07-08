import './App.css';
import Navbar from './components/Navbar.js';
import { useSelector } from 'react-redux';
import QuestionTwo from './components/QuestionTwo.js';
import QuestionOne from './components/QuestionOne.js';

function App() {

  const toggleButtonClicked = useSelector((state) => {
    return state.toggleButtonClicked;
  });

  return (
    <div className='main-container'>
      <Navbar />
      <div className={toggleButtonClicked ? 'content-container black-background' : 'content-container'} >
        <QuestionOne />
        <QuestionTwo />
      </div>
    </div>

  );
}

export default App;
