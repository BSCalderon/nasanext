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

export default function Layout({ children, title }) {
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
                                    <NavLink>Home</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/photopicker" passHref>
                                    <NavLink>Photo Picker!</NavLink> 
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/about" passHref>
                                    <NavLink>About</NavLink> 
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/weather" passHref>
                                    <NavLink>Weather</NavLink> 
                                </Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                    <div className="container h-10">
                    <div class="jumbotron jumbotron-fluid">
                <div class="contrainer">
                    <img src = "https://api.nasa.gov/assets/img/favicons/favicon-192.png" width="150" height="150" display="block" style ={{marginTop: 0,
                                                                                                                                            marginRight: 'auto',
                                                                                                                                            marginBottom: 0,
                                                                                                                                            marginLeft: 'auto',
                                                                                                                                            display: "block"}}/>
                    {/* <img src= "https://w7.pngwing.com/pngs/129/910/png-transparent-api-text-application-programming-interface-computer-icons-web-api-computer-programming-thumbnail.png" width="150" height="150"/> */}
                    <h1 class="display-4" style={{textAlign: 'center'}}>{title}</h1>
                </div>
            </div>
                            {children}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                    </div>
                    <footer className="page-footer  py-2 bg-dark">
                        <div className="container">
                            <span className="text-muted"><p className="text-center">NASA API</p></span>
                        </div>
                    </footer>
            </div>
    )
}