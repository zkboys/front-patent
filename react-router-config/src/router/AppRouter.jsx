import {lazy, Suspense} from 'react';
import {useRoutes} from 'react-router';
import routes from './routes';

export default function AppRouter() {
    const element = useRoutes([
        ...routes.map((item) => {
            const { component } = item;
            return {
                ...item,
                element: lazy(component),
            };
        }),
    ]);

    return (
        <Suspense fallback="加载中...">
            {element}
        </Suspense>
    );
}

