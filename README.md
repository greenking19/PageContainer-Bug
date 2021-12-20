# PageContainer-Bug

1. 登陆后进入首页点击下方按钮 👇
2. F12 打开面板
3. F5 刷新页面然后点击浏览器的返回上一页
4. 🤯 控制台会提示一下 Warning

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op,
          but it indicates a memory leak in your application. To fix, cancel all subscriptions and
          asynchronous tasks in a useEffect cleanup function.
```
