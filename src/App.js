import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes/Routes';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {/* {publicRoutes.map((route, index) => (
                      const Layout = route.layout || DefaultLayout
                        <Route
                            path={route.path}
                            element={<route.component />}
                        />
                    ))} */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
