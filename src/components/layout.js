import * as React from 'react'
import {Link} from 'gatsby'

const Layout = ({ pageTitle, children}) => {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me!</Link></li>
                    <li><Link to="/UpdateAPI">UpdateAPI</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout