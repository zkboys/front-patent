import config from '../../commons/config-hoc';

export default config({
    path: '/', // 通过path标记页面路由地址
})(function() {
    return <div>这是首页</div>;
});
