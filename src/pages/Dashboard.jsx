import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FaBullseye, FaEdit, FaFolder, FaTrophy } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Savings",
        data: [30000, 40000, 35000, 45000, 32000, 50000, 30000, 40000],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: [20000, 30000, 25000, 40000, 28000, 45000, 20000, 35000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-white min-h-screen px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Saving Summary */}

        <div className="lg:col-span-2 p-4 bg-gray-100 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Saving Summary</h2>
            <span className="text-gray-500 cursor-pointer">This month</span>
          </div>
          <div className="h-[300px]">
            <Line
              data={{
                labels: [
                  "Sat",
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ],
                datasets: [
                  {
                    label: "Savings",
                    data: [
                      30000, 40000, 35000, 45000, 32000, 50000, 30000, 40000,
                    ],
                    borderColor: "#4ade80",
                    backgroundColor: "rgba(74, 222, 128, 0.2)",
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: false,
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      callback: function (value) {
                        return value.toLocaleString();
                      },
                    },
                  },
                },
              }}
              height={300}
            />
          </div>
        </div>

        {/* Saving Goal */}
        <div className="p-6 bg-white rounded-2xl shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Saving Goal</h2>
        <div className="px-4 py-2 text-sm bg-gray-100 rounded-full text-gray-600 flex items-center">
          10Jun - 30 Dec
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        {/* Left side - Achievement boxes */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center pl-3 pr-20 py-1 bg-white rounded-xl border border-gray-200">
            <FaTrophy className="text-gray-400 text-xl mr-3" />
            <div>
              <p className="text-sm text-gray-500">Target Achieved</p>
              <p className="text-lg font-semibold">$101.00</p>
            </div>
          </div>
          <div className="flex items-center pl-3 pr-20 py-1 bg-white rounded-xl border border-gray-200">
            <FaBullseye className="text-gray-400 text-xl mr-3" />
            <div>
              <p className="text-sm text-gray-500">This Month Target</p>
              <p className="text-lg font-semibold">$521.00</p>
            </div>
          </div>
        </div>

        {/* Right side - Gauge */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            {/* Background gauge */}
            <svg className="w-full h-full transform -rotate-180" viewBox="0 0 100 100">
              <path
                d="M 50,50 m 0,-47
                   a 47,47 0 1 1 0,94
                   a 47,47 0 1 1 0,-94"
                fill="none"
                stroke="#f0f0f0"
                strokeWidth="6"
              />
              {/* Active gauge */}
              <path
                d="M 50,50 m 0,-47
                   a 47,47 0 1 1 0,94
                   a 47,47 0 1 1 0,-94"
                fill="none"
                stroke="#10B981"
                strokeWidth="6"
                strokeDasharray="147.65, 295.31" // This creates the partial circle (half)
                strokeLinecap="round"
              />
            </svg>
            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-3xl font-bold">45k</span>
            </div>
          </div>
          
          {/* Gauge labels */}
          <div className="w-full flex justify-between mt-2 px-2">
            <span className="text-base font-medium text-gray-500">$0</span>
            <span className="text-base font-medium text-gray-500">$80k</span>
          </div>
          <h3 className="font-bold mt-2">Target vs Achievement</h3>
        </div>
      </div>

      {/* Add Client button */}
      <div className="mt-6">
        <button className="w-full px-4 py-3 border border-emerald-500 text-gray-700 rounded-xl flex items-center justify-center hover:bg-emerald-50 transition-colors">
          Add Client
          <FaEdit className="ml-2 text-gray-500" />
        </button>
      </div>
    </div>
      </div>
      {/* Expenses Goals by Category */}
      <h2 className="text-xl font-semibold my-6">Expenses Goals by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {[
          "Housing",
          "Food",
          "Entertainment",
          "Shopping",
          "Transportation",
          "Others",
        ].map((category, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow ${
              index === 0 ? "bg-green-500 text-white" : "bg-white text-gray-800"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaFolder
                  className={`text-xl ${
                    index === 0 ? "text-white" : "text-green-400"
                  }`}
                />
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
              <div
                className={`cursor-pointer p-1 rounded-full ${
                  index === 0
                    ? "bg-white px-2 py-1 text-green-500"
                    : "text-gray-500"
                }`}
              >
                •••
              </div>
            </div>
            <p className="text-2xl font-bold mt-2">$101.00</p>
            <div className="flex justify-center mt-4">
              <button
                className={`flex items-center space-x-2 px-60 py-1 rounded border ${
                  index === 0 ? "border-white" : "border-gray-300"
                }`}
              >
                <span className="text-sm">Adjust</span>
                <FaEdit className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
