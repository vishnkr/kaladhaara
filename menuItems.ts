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
            {
                title: 'Schedule',
                url:'schedule'
            }
        ]
    },
    {
        title: 'Sac Adavu Meetup',
        url:'/sac-adavu'
    },
    {
        title: 'Contact Us',
        url: '/contact'
    },
    {
        title: 'Blog',
        url: '/blogs'
    },
    {
        title: 'Login',
        url: 'https://app.classmanager.com/portal/kaladhaara-arts-academy/login',
        isSpecial: true,
        target: "_blank"
    },

]