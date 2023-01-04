import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'home',
        link: '/',
    },
    {
        id: 3,
        label: 'Department List',
        icon: 'list',
        link: '/home/department',
    },
    {
        id: 4,
        label: 'Image Uploader',
        icon: 'image',
        link: '/home/image-upload',
    },
    {
        id: 5,
        label: 'News Organizer',
        icon: 'send',
        link: '/home/news',
    },
    {
        id: 6,
        label: 'Staff List',
        icon: 'users',
        link: '/home/staff-details',
    },
    {
        id: 7,
        label: 'Student List',
        icon: 'users',
        link: '/home/student-details',
    },
    {
        id: 8,
        label: 'Forms,Syllabus & Report',
        icon: 'file-text',
        link: '/home/others',
    },
    {
        id: 9,
        label: 'Magazine',
        icon: 'book',
        link: '/home/magazine',
    },
    {
        id: 10,
        label: 'Student Result',
        icon: 'file-text',
        link: '/home/result',
    },
    {
        id: 11,
        label: 'Infrastructure',
        icon: 'home',
        link: '/home/infrastructure',
    },
    {
        id: 12,
        label: 'Blogs',
        icon: 'file-plus',
        link: '/home/blog',
    },
    {
        id: 13,
        label: 'Donner List',
        icon: 'list',
        link: '/home/donation',
    },
    {
        id: 14,
        label: 'Rahotkarsh Fee Fund',
        icon: 'list',
        link: '/home/rahotkarsh',
    },
    {
        id: 15,
        label: 'Institute List',
        icon: 'list',
        link: '/home/college-list',
    },
    {
        id: 16,
        label: 'Alumni List',
        icon: 'list',
        link: '/home/alumni-list',
    },
    {
        id: 17,
        label: 'Contact US List',
        icon: 'list',
        link: '/home/contact-list',
    },
    {
        id: 18,
        label: 'Counseling List',
        icon: 'calendar',
        link: '/home/counseling',
    },
    {
        id: 19,
        label: 'Scholarship & Calendar',
        icon: 'calendar',
        link: '/home/more',
    },
    {
        id: 20,
        label: 'Old Question Papers',
        icon: 'file-text',
        link: '/home/papers',
    },
    {
        id: 21,
        label: 'Gate Pass',
        icon: 'key',
        link: '/home/gate-pass',
    },
];

