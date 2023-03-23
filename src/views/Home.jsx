import { useContext } from "react"
import { AuthContext } from '../contexts/AuthProvider'
import WeatherForm from '../components/WeatherForm'


export default function Home() {

    const { user } = useContext(AuthContext)
  
    console.log(user)
    return (
        <div className="App">
            
            {
                (user.loggedIn) 
            }
            
            {
              (!user.loggedIn) ?
                <></> :
           <div>
                <WeatherForm />
            </div>
            }
           


        </div>
    )
}