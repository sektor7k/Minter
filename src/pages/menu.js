const menus = [ 
    {
        id: 1,
        name: 'Home',
        links: '/',
        
    },
    {
        id: 2,
        name: 'About',
        links: '/#About',
        
    },
    {
        id: 4,
        name: 'Road Map',
        links: '/#RoadMap',
         
    },
    {
        id: 5,
        name: 'Pages',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Sign in ',
                links: '/signin'
            },
            {
                id: 2,
                sub: 'Sign up',
                links: '/signup'
            },
            
        ],
    },
    

    {
        id: 7,
        name: 'Contact',
        links: '/contact',
    },
    
]

export default menus;