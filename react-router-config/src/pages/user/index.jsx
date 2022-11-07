import config from '../../commons/config-hoc';

export default config({
    path: '/user', // 通过path标记页面路由地址
})(function() {
    return <div>这是用户管理页面</div>;
});
