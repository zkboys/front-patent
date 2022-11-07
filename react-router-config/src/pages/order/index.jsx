import config from '../../commons/config-hoc';

export default config({
    path: '/order', // 通过path标记页面路由地址
})(function() {
    return <div>这是订单管理页面</div>;
});
