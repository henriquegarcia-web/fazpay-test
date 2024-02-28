import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import {
  ClientSignUpPage,
  ClientSignInPage,
  ClientDashboardPage
} from './pages'

import { useAdminAuth } from './contexts/AdminAuthContext'

const AppRoutes = () => {
  const { isAdminLogged } = useAdminAuth()

  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}
        <Route path="/*" element={<ClientDashboardPage />} />

        {/* <Route path="/" element={<Navigate to="/entrar" />} />
        <Route path="/*" element={<Navigate to="/entrar" />} /> */}

        {/* =============================================================== */}

        <Route
          path="/entrar"
          element={
            <PublicRoute isAuthenticated={isAdminLogged}>
              <ClientSignInPage />
            </PublicRoute>
          }
        />

        <Route
          path="/cadastrar"
          element={
            <PublicRoute isAuthenticated={isAdminLogged}>
              <ClientSignUpPage />
            </PublicRoute>
          }
        />

        <Route
          path="/app"
          element={
            <PrivateRoute isAuthenticated={isAdminLogged}>
              <ClientDashboardPage />
            </PrivateRoute>
          }
        />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

interface RouteProps {
  isAuthenticated: boolean
  children: React.ReactNode
}

const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin/entrar" replace />
  }

  return children
}

const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (isAuthenticated) {
    return <Navigate to="/admin" />
  }

  return children
}
