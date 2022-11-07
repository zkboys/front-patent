import models from './models'; // 引入所有定义的models
import {createStoreByModels} from '@ra-lib/model'; // model相关工具包

const result = createStoreByModels(models, {
    // middlewares: [ // 额外的redux中间件
    //     thunk,
    // ],
    // enhancers: [], // 与 middlewares 进行compose运算的方法： const enhancer = compose(applyMiddleware(...middlewares), ...enhancers);
    // reducers: {todos}, // 额外的reducers
    // localStorage: window.localStorage, // 同步local存储的对象，需要有setItem，getItem方法，默认window.localStorage
    // sessionStorage: window.sessionStorage, // 同步session存储的对象，需要有setItem，getItem方法，默认window.sessionStorage
    // serialize: JSON.stringify, // 存储时，序列化方法，默认 JSON.stringify
    // deserialize: JSON.parse, // 存储恢复时，解析方法，默认 JSON.parse
    // onError: undefined, // 错误处理函数，默认 undefined
    // onSuccess: undefined, // 成功处理函数，默认 undefined
});

export const store = result.store; // redux的store对象
export const connect = result.connect; // 组件与model链接使用的高阶组件
export const actions = result.actions; // model中定义的所有操作数据的方法
