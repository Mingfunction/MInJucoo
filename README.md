### React-juooo(2019-9-？)

高仿-手机web端聚橙网

> API: [ 聚橙手机web端官网 ](https://m.juooo.com)

> [在线演示地址]()

## 安装于使用

git:

```

npm install // 安装依赖
npm start   // 运行
npm build   // 打包

```

> 后台服务器

```
```

### 用到的技术栈 


- React (核心框架)
- React-Router (路由)
- Redux {}
- ES6 / 7 
- Axios (ajax请求js库)
- ClassName (由于React中css模块化的原因，原先写页面时简单的css ：onhover 变得需要js来操控监听事件，动态添加classname的需求自然就会出来，)

### redux 数据结构

- 用户模块{
    是否登录
    用户ID
    用户信息：{
        vip，
        购买列表，

    }
}
- 购买电子票模块{
    
}
- loading true or false 拦截设置时间，true：显示 false：隐藏



#### 页面加路由模块分析

page 

> 首页index：{
    > 模块{
        头部header ：{
            [ 地址(selectCity) ，搜索)(search) ，分享功能 ，]
            banner
        }，
        演出show ：{
            [ 演出会(show/showsLibrary) ，音乐剧 ，舞台剧 ，儿童剧 ， 音乐剧]
        }，
        特权区 ：{
                vip + plus(plus)
            积分Scores + 日历calendar + 橙卡Cardproduct
        }，
        热门演出 模块
        。。。 演出会列表 模块
        推荐 模块
    }
    > 路由{
        子：[selectCity,search,show,vip,plus,ticket]
                城市     搜索   表演          演出详情
        同：[theatre,eticket,myjuooo]
        特殊：[ wxcoupon/coupon ]
                活动
    }
}
> 影院theatre/theatreList：{
    > 模块 影院列表theatreList
    > 路由 theatre/index(tid{})
}

> 票夹eticket/list：{
    暂时不知道有票时的样式，
}

> 我的：{
    My：[设置，余额，积分，vip，puls，地址，实名，意见，客服]
}

### 功能

### 版本更新记录 ---

### V 1.0.0 ( 上线日期 )









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
