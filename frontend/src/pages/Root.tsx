import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Breadcrumbs from "../components/Breadcrumbs"

const RootLayout = () => {
  return <>
    <Header />
    <Breadcrumbs />
    <main className="p-6">
      <Outlet />
    </main>
  </>
}

export default RootLayout