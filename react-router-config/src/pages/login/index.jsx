import config from '../../commons/config-hoc';

export default config({
    path: '/login', // 通过path标记页面路由地址
})(function() {
    return <div>这是登录管理页面</div>;
});
