import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography } from 'antd';

const { Title } = Typography;

const PageContainerBug: React.FC = () => {
  return (
    <PageContainer key="ttrttt">
      <Title>显示Bug操作👇</Title>
      <Title>F12打开面板</Title>
      <Title>F5 刷新页面</Title>
      <Title>点击浏览器的返回上一页</Title>
      <Title>🤯 控制台会提示一下Wrining</Title>
      <div style={{ background: 'red', width: 480, padding: 16 }}>
        <div style={{ color: 'white' }}>
          Warning: Can't perform a React state update on an unmounted component. This is a no-op,
          but it indicates a memory leak in your application. To fix, cancel all subscriptions and
          asynchronous tasks in a useEffect cleanup function.
        </div>
      </div>
    </PageContainer>
  );
};

export default PageContainerBug;
