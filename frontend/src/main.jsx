import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './pages/index.css'
import App from './pages/App.jsx'

// Lazy-init Locator runtime when user presses the Option/Alt key.
// This avoids adding the locator UI to every page load and mirrors
// the common workflow where Option toggles the locator overlay.
let _locatorInited = false
try {
  // Importing dynamically so bundlers only include runtime when used.
  const handleAlt = async (e) => {
    if (e.key !== 'Alt') return
    if (_locatorInited) return
    _locatorInited = true
    try {
      const mod = await import('@locator/runtime')
      const setup = mod.default || mod.setup || mod
      if (typeof setup === 'function') setup()
    } catch (err) {
      // swallow: locator may not be available in some environments
      // eslint-disable-next-line no-console
      console.error('Failed to load @locator/runtime:', err)
    } finally {
      // remove the listener after first use
      window.removeEventListener('keydown', handleAlt)
    }
  }
  window.addEventListener('keydown', handleAlt)
} catch (err) {
  console.warn('Locator runtime not supported in this environment:', err)
  // ignore in non-browser environments
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
