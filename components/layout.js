import styles from './layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Link from 'next/link'
import {
    Jumbotron,
    Navbar,
    NavItem,
    Nav,
    NavLink,
    
  } from 'reactstrap';

export default function Layout({ children }) {
    return (
            <div>
                <Head>
                    <title>NASA API</title>
                </Head>
            
                <div>
                    <Navbar color="dark">
                        <Nav>
                            <NavItem>
                                <Link href="/" passHref>
                                    <NavLink><a>Home</a></NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/photopicker" passHref>
                                    <NavLink><a>Photo Picker!</a></NavLink> 
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/about" passHref>
                                    <NavLink><a>About</a></NavLink> 
                                </Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                    <div className="container h-10">
                        <body>
                            {children}
                        </body>
                    </div>
                    <footer className="page-footer fixed-bottom py-2 bg-dark">
                        <div className="container">
                            <span className="text-muted"><p className="text-center">NASA API</p></span>
                        </div>
                    </footer>
            </div>
    )
}