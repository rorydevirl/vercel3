
import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to WotsOn MVP (React)</h1>
      <p>This is the beginning of your full interactive app.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
