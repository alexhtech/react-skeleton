import * as React from 'react'
import Heart from './assets/heart.svg'

const style: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: '#005bbb',
  fontSize: '32px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
}

function App() {
  return (
    <div style={style}>
      <span>#FreeUkraine</span>
      <Heart />
    </div>
  )
}

export default App
