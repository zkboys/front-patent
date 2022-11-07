import {lazy, Suspense} from 'react';
import {useRoutes} from 'react-router';
import pageConfigs from './pages/page-configs';

// 抓取到的页面路由
const routes = pageConfigs.filter(({ path }) => !!path);


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

