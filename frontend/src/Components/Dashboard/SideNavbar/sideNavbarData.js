import d from '../../../images/d.png';
import invite from '../../../images/invite.png';
import profile from '../../../images/profile.png';
import url from '../../../images/url.png';

export const sideNavbarData = [ 
    {
        title: 'Dashboard',
        path: '/',
        icon: d,
    },
    {
        title: 'MemberManagement',
        path: '/members',
        icon: profile,
    },
    {
        title: 'BookManagement',
        path: '/books',
        icon: url,
    },
   
    {
        title: 'BookIssuing',
        path: '/issues',
        icon: invite,
    },

    {
        title: 'BookReturning',
        path: '/returnBook',
        icon: invite,
    },
]