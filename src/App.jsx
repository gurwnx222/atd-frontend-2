import './App.css'
import Docs from './Components/Docs'
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Docs />
    </Router>
  )
}