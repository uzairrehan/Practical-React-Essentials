import { RouterProvider } from 'react-router-dom'
import './App.css'
import appRouter from './routes'

function App() {

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
