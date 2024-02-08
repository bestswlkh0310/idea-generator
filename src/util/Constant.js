import Contact from "../UI/Contact/Contact"
import Home from "../UI/Home/Home"
import Support from "../UI/Support/Support"

export const NavList = [
    {
        title: 'Home',
        path: '/',
        element: <Home/>
    },
    {
        title: 'Support',
        path: '/support',
        element: <Support/>
    },
    {
        title: 'Contact',
        path: '/contact',
        element: <Contact/>
    }
]