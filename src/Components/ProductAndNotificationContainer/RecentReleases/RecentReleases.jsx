import React from "react";
import Notification from "./Notification/Notification";

const RecentReleases = () => {
    const notifications=[
        {
            title: "Industrial Production",
            details: "Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.",
            date: "February 12, 2024"
        },
        {
            title: "CPI Inflation",
            details: "India's Inflation eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFPI) declined from 9.5% in Dec'23 to 8.3% in",
            date: "February 14, 2024"
        },
        {
            title: "Tax Rate",
            details: "In September 2019, the Indian government announced a 15% corporate tax rate for new domestic companies that invest in manufacturing and start production by March 31, 2023. The 2022-23 Union Budget extended this rate to March 31, 2024.",
            date: "February 27, 2024"
        },
    ]

	return <div className=" bg-white rounded-lg w-[35%] p-4 border-[1px] shadow-md shadow-gray-200 border-gray-100 ml-[2.5rem] mr-[1.5rem] mb-8">
        <div className="flex justify-between items-start border-b-[0.1rem] border-gray-300 pb-3">
            <div className="text-[17px] text-[#469cdc] font-semibold">Recent Releases</div>
            <select name="country" id="select-country" className="p-2 outline-none border-[2px] border-gray-300 font-semibold rounded-md">
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
            </select>
        </div>

        {/* notifications container  */}
        <div>
            {
                notifications.map((item,i)=>{
                    return (
                        <Notification {...item} key={i} />
                    )
                })
            }
        </div>
    </div>;
};

export default RecentReleases;
