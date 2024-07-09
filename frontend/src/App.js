import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header />
        <main>
          <Container>
              <Outlet />
          </Container>
        </main>
        <Footer />
    </>
  )
}

export default App
