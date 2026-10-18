import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'
import { Suspense } from 'react'
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'



export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(route => (
                  <li key={route.to}>
                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                  </li>

                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ path, Component }) => (
                <Route path={path} element={<Component />} key={path} />

              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}
