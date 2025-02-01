import './App.css'
import Page from './pages/Page'
import { PlanProvider } from './utils/PlanContext'

function App() {
  return (
    <>
      <section className='grid place-items-center min-h-screen mx-auto'>
        <div className=''>
            <PlanProvider>
              <Page/>
            </PlanProvider>
        </div>
      </section>
    </>
  )
}

export default App
