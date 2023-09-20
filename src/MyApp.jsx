import React from 'react'
import  { useState } from "react";
import { Card, CardHeader } from '@ui5/webcomponents-react'
import { Text } from '@ui5/webcomponents-react'
import { ThemingParameters, spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import listIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js"
import {
    Avatar,
    ShellBar,
    ShellBarItem,
    List,
    StandardListItem,
    CustomListItem,
    ValueState,
    ProgressIndicator,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
} from "@ui5/webcomponents-react";
const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `BPSH${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100)
      }
    };
  });

  let list_data = new Array(20).fill(null).map((_,index)=>{
    return {
        name:`name${index}`
    }
  })
 
  
  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Friend Name",
      accessor: "friend.name"
    },
    {
      Header: "Friend Age",
      accessor: "friend.age"
    }
  ];

export function MyApp() {
    const [toggleCharts, setToggleCharts] = useState("lineChart")
    const [loading, setLoading] = useState(false);
    let handleheaderClick = () => {
        if(toggleCharts === "lineChart")
        {
           setLoading(true) 
           setTimeout(()=>{
            setLoading(false)
            setToggleCharts("barChart");
           },2000)
        }else
        {
            setLoading(true) 
            setTimeout(()=>{
                setLoading(false)
                setToggleCharts("lineChart");
            },2000)
        }
    }
    const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";
    const dataset = [
        {
            month: "January",
            data: 65
        },
        {
            month: "February",
            data: 59
        },
        {
            month: "March",
            data: 80
        },
        {
            month: "April",
            data: 81
        },
        {
            month: "May",
            data: 56
        },
        {
            month: "June",
            data: 55
        },
        {
            month: "July",
            data: 40
        }
    ];
    return <div>
        <ShellBar logo={<img src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" />} profile={<Avatar>
            <img src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg" />
        </Avatar>} primaryTitle="My App" > 
            <ShellBarItem icon="sap-icon://add"  Text="add" >

            </ShellBarItem> 
            </ShellBar>
            <FlexBox  justifyContent={FlexBoxJustifyContent.Center} wrap={FlexBoxWrap.Wrap}  >

           
        <Card
            header={<CardHeader titleText="Stock Price"  subtitleText={`click here to switch  ${switchToChart}`} avatar={<Icon name={toggleCharts === "lineChart" ? lineChartIcon : barChartIcon}  />} interactive onClick={handleheaderClick} />} style={{ width: "300px",margin:"50px" }}  >
            <Text style={spacing.sapUiContentPadding}  >{contentTitle}</Text>
          
                    {toggleCharts === "lineChart" ? (
                        <LineChart
                          dimensions={[{ accessor: "month" }]}
                          measures={[{ accessor: "data", label: "Stock Price" }]}
                          dataset={dataset}
                          loading={loading}
                        />
                      ) : (
                        <BarChart
                          dimensions={[{ accessor: "month" }]}
                          measures={[{ accessor: "data", label: "Stock Price" }]}
                          dataset={dataset}
                          loading={loading}
                        />
                      )}
        </Card>
        <Card header={
            <CardHeader titleText="Progress" subtitleText="List" avatar={<Icon name={listIcon} ></Icon>} >

            </CardHeader>
        } style={{width:"300px"}}  >
        <List    style={{ height: '300px', overflow: 'auto' } }>
        {list_data.map((item) => (
        <StandardListItem >
          {item.name}
        </StandardListItem>
      ))}

            {/* <StandardListItem additionalText="finished" additionalTextState={ValueState.Success}  >Activity 1</StandardListItem>
            <StandardListItem additionalText="Error"  additionalTextState={ValueState.Error} >Activity 2</StandardListItem> */}
            {/* <CustomListItem>
                    <FlexBox
                        direction={FlexBoxDirection.Column}
                        style={{ width: "100%", ...spacing.sapUiContentPadding }}
                    >
                        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                            <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                                Activity 3
                            </Text>
                            <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                                in progress
                            </Text>
                        </FlexBox>
                        <ProgressIndicator
                            value={89}
                            valueState={ValueState.Success}
                            style={{ ...spacing.sapUiTinyMarginTop }}
                        />
                    </FlexBox>
            </CustomListItem>
                <CustomListItem>
                    <FlexBox direction={FlexBoxDirection.Column}   style={{ width: "100%", ...spacing.sapUiContentPadding }}  >
                        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} >
                            <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }} >Activity 4</Text>
                            <Text style={{ color: ThemingParameters.sapCriticalTextColor }} >in Progress</Text>
                        </FlexBox>
                        <ProgressIndicator value={12}  valueState={ValueState.Error} />
                    </FlexBox>
                  
                </CustomListItem> */}
        </List> 
        </Card>
        <Card    header={<CardHeader titleText="Analytical Table" avatar={<Icon  name={tableViewIcon} />} ></CardHeader>}  style={{width:"700px",margin:"50px",height:"50%"}}  > 
        <AnalyticalTable
            data={tableData}
            columns={tableColumns}
            visibleRows={5}
          />
           
          
        </Card>
        </FlexBox>
    </div>
}