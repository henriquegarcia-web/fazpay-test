import AppRoutes from './Routes'

import { AdminAuthProvider } from './contexts/AdminAuthContext'

function App() {
  return (
    <AdminAuthProvider>
      <AppRoutes />
    </AdminAuthProvider>
  )
}

export default App
