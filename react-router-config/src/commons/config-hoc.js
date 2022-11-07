/**
 * config高阶组件，会作为路由扫描的标识，高阶组件可以含有任意其他功能
 * @returns {function(*)}
 */
export default function configHoc() {
    return (WrappedComponent) => <WrappedComponent/>;
}
