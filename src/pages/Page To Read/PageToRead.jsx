import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Label,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF0000",
  "#7C4DFF",
  "#00BCD4",
  "#9C27B0",
  "#4CAF50",
];

const getPath = (x, y, width, height) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
      ${x + width / 2},${y + height / 3}
      ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
      ${x + (2 * width) / 3},${y + height}
      ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height, index } = props;

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      fill={fill || colors[index % colors.length]}
    />
  );
};

const CustomLabel = (props) => {
  const { x, y, width, value, index } = props;

  return (
    <text
      x={x + width / 2}
      y={y - 10}
      fill={colors[index % colors.length]}
      textAnchor="middle"
      fontWeight="700"
      fontSize={20}
    >
      {value}
    </text>
  );
};

const PageToRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const chartData = data.map((book) => ({
          name: book.bookName,
          pages: book.totalPages,
        }));

        setBooks(chartData);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
        <ResponsiveContainer width="100%" height={550}>
          <BarChart
            data={books}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis
              dataKey="name"
              interval={0}
              tick={{
                fill: "#7a7a7a",
                fontSize: 14,
              }}
            />

            <YAxis
              width={40}
              tick={{
                fill: "#777",
              }}
            />

            <Tooltip
              cursor={{
                fill: "rgba(0,0,0,.05)",
              }}
            />

            <Bar dataKey="pages" shape={<TriangleBar />} activeBar>
              {books.map((book, index) => (
                <Label
                  key={index}
                  dataKey="pages"
                  fill={colors[index % colors.length]}
                />
              ))}

              <LabelList dataKey="pages" content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageToRead;
