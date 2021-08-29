import Navbar from 'components/base/Navbar'
import { ReactNode } from 'react'

interface LayoutAPPProps {
  children: ReactNode
}

function LayoutAPP({ children }: LayoutAPPProps): JSX.Element {
  const navbarHeight = '50px'
  const maxNavWidth = '1440px'
  const fixedNavbar = true
  const maxContentWidth = '1080px'

  return (
    <div className="min-h-screen">
      <Navbar
        height={navbarHeight}
        maxWidth={maxNavWidth}
        fixed={fixedNavbar}
      />

      {/*Children*/}
      <div
        className="w-full flex justify-center bg-gray-50"
        style={{ paddingTop: fixedNavbar ? navbarHeight : 0, minHeight: fixedNavbar ? '100vh' : `calc(100vh - ${navbarHeight})` }}
      >
        <div style={{ maxWidth: maxContentWidth, width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutAPP
