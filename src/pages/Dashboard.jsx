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
import { FaEdit } from "react-icons/fa";

// Register Chart.js components
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
  // Data for Line Chart
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Saving Summary */}

        <div className="lg:col-span-2 p-4 bg-white rounded-lg shadow">
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
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Saving Goal</h2>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">45k</div>
            <p className="text-sm text-gray-500">Target vs Achievement</p>
            <div className="flex justify-between w-full mt-4 text-gray-700">
              <p>Target Achieved: $101.00</p>
              <p>This Month Target: $521.00</p>
            </div>
            <button className="mt-4 px-4 py-2 border rounded flex items-center">
              <FaEdit className="mr-2" />
              Add Client
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
              <h3 className="text-lg font-semibold">{category}</h3>
              <div className="text-gray-500 cursor-pointer">•••</div>
            </div>
            <p className="text-2xl font-bold mt-2">$101.00</p>
            <button className="mt-4 flex items-center space-x-2">
              <FaEdit className="text-sm" />
              <span className="text-sm">Adjust</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
