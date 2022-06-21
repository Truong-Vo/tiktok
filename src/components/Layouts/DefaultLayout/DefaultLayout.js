import Header from '~/components/Layouts/DefaultLayout/Header/Header';
import Sidebar from '~/components/Layouts/DefaultLayout/Sidebar/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
