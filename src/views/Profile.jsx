
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import WeatherPost from '../components/WeatherPost'
import { AuthContext } from '../contexts/AuthProvider'

export default function Profile() {
    const { login, user, logout } = useContext(AuthContext)
    const { cities } = useContext(DataContext)
    return (
        <div className="App">
            {
                (user.loggedIn)
            }
            <h2>Welcome {user.displayName} </h2>
            <div>
                { cities.map((post) => <WeatherPost post={post} key={post.id}/>) }
            </div>
        </div>
    )
}


