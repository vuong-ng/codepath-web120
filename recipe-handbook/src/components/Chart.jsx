import React, { Component, useEffect, useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
  } from "recharts";

const BreweryChart = () => {
    const countries = ['austria', 'england', 'france', 'isle_of_man', 'ireland', 'poland', 'portugal', 'scotland', 'singapore', 'south_korea', 'united_states'];
    // const [names, setName] = useState([])
    const [metadata, setMetaData] = useState([]);
    const url = `https://api.openbrewerydb.org/v1/breweries/meta?by_country=`
    const options = {
        method: 'GET',
        // authorization: API_KEY,
      }
    useEffect(() => {
        const getMetaData = async () => {
            const dataList = [];
            for (var i = 0; i < countries.length; i++) {
                const response = await fetch(url + countries[i], options);
                console.log(response);
                const data = await response.json();
                const temp = { 'name': countries[i], 'breweries': Number(data.total) }
                dataList[i] = temp;
            }
            setMetaData(dataList);
        }
        getMetaData().catch(console.error);
    }, []);
    console.log(metadata)
    return (
        metadata && (<div>
  <br></br>
  <h2>Brewry number according to country</h2>

  <LineChart
    width={1300}
    height={400}
    data={metadata}
    margin={{
      top: 10,
      right: 30,
      left: 20,
      bottom: 30,
    }}
  >
    <Line
      type="monotone"
      dataKey="breweries"
      stroke="#8884d8"
      activeDot={{ r: 5 }}
    />
    <CartesianGrid strokeDasharray="5 5" />
    <XAxis dataKey="name" interval={2} angle={20} dx={20}>
      <Label value="Name" offset={0} position="insideBottom" />
    </XAxis>

    <YAxis
    
      label={{
        value: "Total",
        angle: -90,
        position: "insideLeft",
        textAnchor: "middle",
      }}
    />
    <Tooltip />
  </LineChart>
</div>)
    )


}
export default BreweryChart;