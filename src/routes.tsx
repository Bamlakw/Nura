import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { HomePage } from './components/home-page/home-page';
import { Feature } from './components/feature/feature';
import { Subscription } from './components/subscription/subscription';
import { AboutComponent } from './components/about-component/about-component';
import ErrorPage from './components/error/error';
import { Partners } from './components/partners/partners';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'products', element: <Feature /> },
            { path: 'subscription', element: <Subscription /> },
            { path: 'AboutComponent', element: <AboutComponent /> },
            { path: 'Support', element: <Partners /> }, 
        ], 
        errorElement: <ErrorPage />,
    },
];
