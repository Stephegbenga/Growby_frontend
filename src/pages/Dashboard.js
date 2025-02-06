import React from 'react';
import { Card } from 'antd';
import { MessageCircle, Users, FileText, Send, Check, Eye, Info } from 'lucide-react';

const StatBlock = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  </div>
);

const MetricBlock = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  </div>
);

const AccountDetail = ({ label, value, type = "default", upgradeText }) => (
  <div className="flex flex-col items-center">
    <div className="mb-2">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <Info className="w-4 h-4 text-gray-600" />
      </div>
    </div>
    <div className="flex flex-col items-center text-center">
      <span className={`
        font-medium mb-1
        ${type === "demo" ? "text-green-600" : ""}
        ${type === "pending" ? "text-orange-500" : ""}
        ${type === "default" ? "text-gray-900" : ""}
      `}>
        {value}
      </span>
      {upgradeText && (
        <span className="text-orange-500 text-sm mb-1">({upgradeText})</span>
      )}
      <span className="text-gray-600 text-sm">{label}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button className="p-2 rounded-lg bg-blue-500 text-white">#</button>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          <Card bodyStyle={{ padding: '24px' }}>
            <div className="flex justify-between">
              <StatBlock icon={MessageCircle} value="1" label="Contacts" />
              <div className="w-px bg-gray-200"></div>
              <StatBlock icon={Users} value="0" label="Groups" />
              <div className="w-px bg-gray-200"></div>
              <StatBlock icon={FileText} value="0" label="Campaigns" />
            </div>
          </Card>

          <Card bodyStyle={{ padding: '24px' }}>
            <div className="flex justify-between">
              <MetricBlock icon={Send} value="0" label="Sent" />
              <div className="w-px bg-gray-200"></div>
              <MetricBlock icon={Check} value="0" label="Delivered" />
              <div className="w-px bg-gray-200"></div>
              <MetricBlock icon={Eye} value="0" label="Read" />
            </div>
          </Card>
        </div>

        <Card className="w-96" bodyStyle={{ padding: '24px' }}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold">Account Details</h2>
            <div className="flex items-center gap-1">
              <span className="text-blue-500">Setup Help</span>
              <Info className="w-4 h-4 text-blue-500" />
            </div>
          </div>

          <div className="flex justify-between px-4">
            <AccountDetail 
              value="Demo Plan"
              label="Account status"
              type="demo"
              upgradeText="Upgrade Now"
            />
            <AccountDetail 
              value="+919XXXXX"
              label="WhatsApp Number"
            />
            <AccountDetail 
              value="Pending"
              label="API Setup"
              type="pending"
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-8 mb-4">
            Setup WhatsApp Business
          </button>

          <p className="text-gray-600 text-sm">
            Note: To send message from your number, link your WhatsApp Business Account. Otherwise, create a campaign to test and send messages from our number
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;