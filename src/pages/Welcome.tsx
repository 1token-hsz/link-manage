import { ProCard } from '@ant-design/pro-components';
import { Statistic } from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import React from 'react';
import { Column } from '@ant-design/plots';

const { Divider } = ProCard;

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json',
    },
    xField: 'letter',
    yField: 'frequency',
    label: {
      text: (d) => `${(d.frequency * 100).toFixed(1)}%`,
      textBaseline: 'bottom',
    },
    axis: {
      y: {
        labelFormatter: '.0%',
      },
    },
    style: {
      // 圆角样式
      radiusTopLeft: 10,
      radiusTopRight: 10,
    },
  };
  return <Column {...config} />;
};


export default () => {

  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard.Group title="今日统计数据" direction={responsive ? 'column' : 'row'}>
        <ProCard>
          <Statistic title="累计访问量" value={79.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="目标链接访问量" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="默认链接访问量" value={93} suffix="/ 100" />
        </ProCard>
      </ProCard.Group>
      <br />
      <ProCard
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        title={'今日访问量'}
        bordered
      >
        <DemoColumn />
      </ProCard>
    </RcResizeObserver>
  );
};



