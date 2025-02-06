import React from "react";
import { Card, Button } from "antd";
import { FaUsers, FaPaperPlane, FaEye, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* First Row */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <Card>
          <div className="flex items-center justify-between">
            <FaUsers className="w-8 h-8 text-gray-500" />
            <div className="text-center">
              <p className="text-2xl font-bold">1</p>
              <p className="text-gray-500">Contacts</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <FaUsers className="w-8 h-8 text-gray-500" />
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-500">Groups</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <FaUsers className="w-8 h-8 text-gray-500" />
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-500">Campaigns</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <Card>
          <div className="flex items-center justify-between">
            <FaPaperPlane className="w-8 h-8 text-gray-500" />
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-500">Sent</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <FaCheckCircle className="w-8 h-8 text-gray-500" />
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-500">Delivered</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <FaEye className="w-8 h-8 text-gray-500" />
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-500">Read</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Account Details */}
      <Card className="mt-6 p-4">
        <h2 className="text-xl font-bold">Account Details</h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-bold">Demo Plan</p>
          <p className="text-green-600">+9190162XXXXX</p>
          <p className="text-yellow-600">Pending</p>
        </div>
        <Button type="primary" className="w-full mt-4">Setup WhatsApp Business</Button>
        <p className="text-gray-500 text-sm mt-2">
          Note: To send messages from your number, link your WhatsApp Business Account.
        </p>
      </Card>
    </div>
  );
};

export default Dashboard;
