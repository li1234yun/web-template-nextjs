import Navbar from "components/base/Navbar"
import SearchNet from "components/base/SearchNet"
import { ReactNode } from "react-transition-group/node_modules/@types/react"

interface LayoutHomeProps {
    children: ReactNode
}

function LayoutHome({ children }: LayoutHomeProps): JSX.Element {
    return (
        <div className='min-h-screen'>
            <Navbar fixed={false}/>

            {children}
        </div>
    )
}


export default LayoutHome
