import './App.css';
import Navbar from './components/Navbar.js';
import { useSelector } from 'react-redux';
import QuestionTwo from './components/QuestionTwo.js';


function App() {

  const toggleButtonClicked = useSelector((state) => {
    return state.toggleButtonClicked;
  });

  return (
    <div className='main-container'>
      <Navbar />
      <div className={toggleButtonClicked ? 'content-container black-background' : 'content-container'} >
        <QuestionTwo />
        <QuestionTwo />
      </div>
    </div>

  );
}

export default App;
