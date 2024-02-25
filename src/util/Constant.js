import Idea from "../UI/Idea/Idea"
import Playground from "../UI/Playground/Playground"
import Support from "../UI/Support/Support"

export const NavList = [
    {
        title: 'Idea',
        path: '/',
        element: <Idea/>
    },
    {
        title: 'Playground',
        path: '/playground',
        element: <Playground/>
    },
    {
        title: 'Support',
        path: '/support',
        element: <Support/>
    }
]