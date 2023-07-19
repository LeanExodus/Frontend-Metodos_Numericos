import { AppContext } from "@/components/context/appContext"
import { SessionContext } from "@/components/context/sessionContext"
import { Landing } from "@/components/public/Landing"
import { RegisterForm } from "@/components/public/RegisterForm"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"


export default function Home() {
 
  const { setLoading } = useContext(AppContext)
  const { isLogged } = useContext(SessionContext)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    if (isLogged) {
      router.push('/app')
    }
    setLoading(false)
  }, [isLogged, router, setLoading])
  return (

    <main className="h-screen grid content-center">
      <div className="">
        

        <div className="">
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}