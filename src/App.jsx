import './App.css'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <HomePage />
    </>
  )
}

export default App
