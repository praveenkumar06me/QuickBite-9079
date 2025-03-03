import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

export default function OrderTracking() {
  const { orderId } = useParams();

  const option = {
    title: {
      text: 'Delivery Progress',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Order Placed', 'Preparing', 'On the Way', 'Delivered']
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: [100, 80, 50, 0],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#FF4646',
        width: 4
      },
      itemStyle: {
        color: '#FF4646'
      }
    }]
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Order #{orderId}</h2>
        <div className="mb-8">
          <ReactECharts option={option} style={{ height: '300px' }} />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Estimated Delivery Time:</span>
            <span>35-45 minutes</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Delivery Address:</span>
            <span className="text-gray-600">123 Main St, City</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Order Status:</span>
            <span className="text-primary font-semibold">On the Way</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}