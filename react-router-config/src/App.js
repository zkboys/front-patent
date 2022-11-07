import {Link} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
    return (
        <div className="wrap">
            <ul className="menu">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/login-manage">登录管理</Link></li>
                <li><Link to="/order-manage">订单管理</Link></li>
                <li><Link to="/user-manage">用户管理</Link></li>
            </ul>

            <div className="content">
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
