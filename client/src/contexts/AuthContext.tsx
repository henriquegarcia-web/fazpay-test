import React, { createContext, useContext, useMemo, useState } from 'react'

interface AuthContextData {
  isClientLogged: boolean
}

// ===================================================================

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [isClientLogged, setAdminLogged] = useState<boolean>(false)

  // =================================================================

  const AuthContextValues = useMemo(() => {
    return {
      isClientLogged
    }
  }, [isClientLogged])

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { AuthProvider, useAuth }
