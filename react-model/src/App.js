import {Provider} from 'react-redux'; // 引入redux相关工具包
import {store} from './models'; // 引入models
import Home from './Home'; // 引入home组件

function App() {

    return (
        /* 将store传递给redux的Provider */
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App;
