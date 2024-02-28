import React, { createContext, useContext, useMemo, useState } from 'react'

interface AuthContextData {
  userId: string | null
}

// ===================================================================

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [userId, setUserId] = useState<string | null>(null)

  // =================================================================

  const AuthContextValues = useMemo(() => {
    return {
      userId
    }
  }, [userId])

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
