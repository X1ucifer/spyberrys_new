import React from 'react'
import Header1 from '../Header/header'
import { useRouter } from 'next/router';
import ResponsiveContainer from "../../utils/responsiveContainer"



function Layout({ children }) {

  const router = useRouter();
  const isLoginPage = router.pathname === '/login';
  const isSignupPage = router.pathname === '/signup';



  return (
    <div>

      {!isLoginPage && !isSignupPage && <Header1 />}
      <ResponsiveContainer >
        {children}
      </ResponsiveContainer >

    </div>
  )
}

export default Layout