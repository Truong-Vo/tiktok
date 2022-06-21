import HeaderOnly from '~/components/Layouts/HeaderOnly/HeaderOnly';
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Upload from '~/pages/Upload/Upload';
import Profile from '~/pages/Profile/Profile';
import Search from '~/pages/Search/Search';
// public
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
// private

const privateRoutes = [];

export { publicRoutes, privateRoutes };
