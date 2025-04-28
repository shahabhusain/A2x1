import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  )
}

export default App