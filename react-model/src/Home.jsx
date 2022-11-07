import {connect} from './models'; // 引入与model链接的高阶足迹爱你
import {useCallback} from 'react';

// 使用connect高阶组件与models进行链接
export default connect(state => ({
    // 获取model中demo模块（文件名及模块名）中数据，注入到当前组件的props中
    user: state.demo.user,
}))(function Home(props) {
    const {
        user, // 获取connect注入的model数据，user
        action: { demo: demoAction }, // 获取model中定义的相关方法，这里获取的是demo模块中的方法
    } = props;

    const handleClick = useCallback(() => {
        // 调用model中定义的方法，获取user
        demoAction.getUser();
    }, [demoAction]);

    return (
        <div>
            <button onClick={handleClick}>获取用户</button>
            <pre>
                {/* 展示获取到的user数据 */}
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    );

});
