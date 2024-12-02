
import { ThemeProvider } from "./components/utils/theme-provider"
import Home from "./app/pages/home"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  )
}

export default App
