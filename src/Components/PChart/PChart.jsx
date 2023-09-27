import { PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PChart = ({ percentage, remainPercentage }) => {
  let a = parseFloat(percentage);
  let b = parseFloat(remainPercentage);
  const data = [
    { name: "Group A", value: a },
    { name: "Group B", value: b },
  ];
  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

PChart.propTypes = {
  percentage: PropTypes.string,
  remainPercentage: PropTypes.string,
};
export default PChart;
