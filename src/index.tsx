import { createRoot } from 'react-dom/client'

import { App } from './App'

const rootEl = document.getElementById('react-root')

if (!rootEl) {
  throw new Error('No root element found')
}

const root = createRoot(rootEl)

root.render(<App />)
