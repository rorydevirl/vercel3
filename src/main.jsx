
import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎉 WotsOn is Live!</h1>
      <p>This is your full React build, working on Vercel.</p>
      <ul>
        <li>✅ React + Vite setup</li>
        <li>✅ Deployable from GitHub</li>
        <li>🎯 Ready for full features next</li>
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

