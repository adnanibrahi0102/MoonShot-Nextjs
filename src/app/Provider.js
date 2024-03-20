"use client"
import React from 'react'
import { AuthProvider } from '@/context/authContext'
const Provider = ({children}) => {
  return (
     <AuthProvider>
        {children}
     </AuthProvider>
  )
}

export default Provider
