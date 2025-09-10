export interface MenuItem{
    title: string,
    url: string,
    submenu?: MenuItem[],
    isSpecial?: boolean,
    target?:string
}
export type MenuItems = MenuItem[]

export const menuItems: MenuItems = [
    {
        title: 'About Us',
        url: '/about',
        submenu:[
            {
                title: 'Kaladhaara',
                url: 'kaladhaara'
            },
            {
                title: 'Mathura',
                url: 'mathura'
            },
            {
                title: 'Our Team',
                url: 'team'
            },
        ]
    },
    {
        title: 'Curriculum',
        url: '/curriculum',
    },
    {
        title: 'Events',
        url: '/events',
        submenu:[
            {
                title: 'Upcoming Events',
                url: 'upcoming'
            },
            {
                title: 'Past Events',
                url: 'past'
            },
        ]
    },
    {
        title: 'Gallery',
        url: '/gallery'
    },
    {
        title: 'Facility',
        url: '/facility',
        submenu:[
            {
                title: 'Locations',
                url: 'locations'
            },
            
        ]
    },
    {
        title: 'Sac Adavu Meetup',
        url:'/sac-adavu'
    },
    {
        title: 'Updates',
        url: '/updates',
        submenu: [
          { title: 'Blog', url: 'blogs' },
          { title: 'Newsletters', url: 'newsletters' }
        ]
    },   
    {
        title: 'Contact Us',
        url: '/contact'
    },   
    {
        title: 'Login',
        url: 'https://app.classmanager.com/portal/kaladhaara-arts-academy/login',
        isSpecial: true,
        target: "_blank"
    },

]