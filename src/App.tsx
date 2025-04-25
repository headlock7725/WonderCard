import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">Welcome to the App</h1>
          <p className="mt-4">This is a simple app using React and Tailwind CSS.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
