import pageConfigs from '../pages/page-configs';

// 抓取到的页面路由
const pageRoutes = pageConfigs.filter(({ path }) => !!path);

// 所有人都可以访问的页面
export const commonPaths = ['/', '/login'];

/*
 * 非脚本抓取的路由，可以在这里编辑，
 * 脚本抓取的路由在./src/pages/page-configs.js中
 * */
export default [
    // {path: '/', component: ()=> import('./path-to-component')},
]
    .concat(pageRoutes)
    .map((item) => {
        return {
            ...item,
        };
    });
