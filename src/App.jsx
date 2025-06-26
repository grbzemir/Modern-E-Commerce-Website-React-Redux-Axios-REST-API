import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Containers/Header'
import ProductList from './Containers/ProductList'
import ProductDetail from './Containers/ProductDetail'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
