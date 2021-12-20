import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Typography } from 'antd';
import { useHistory } from 'umi';

const { Title } = Typography;
const Home: React.FC = () => {
  const history = useHistory();
  const toBugPage = () => {
    history.push(`/show-bug/test-bug`);
  };
  return (
    <PageContainer>
      <Title>Bug复现操作:</Title>
      <Title>点击下方按钮👇</Title>

      <div>
        <Button type="primary" onClick={toBugPage}>
          To Bug Page
        </Button>
      </div>
    </PageContainer>
  );
};

export default Home;
