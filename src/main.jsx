import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DataProvider } from './contexts/DataProvider'
import { AuthProvider } from './contexts/AuthProvider'
import firebase from './firebase'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>,
)
