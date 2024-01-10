import React, { useState, useRef } from "react";
import Image1 from "../utils/image1";
import Image2 from "../utils/image2";
import Image3 from "../utils/Image3";
import Image4 from "../utils/Image4";

const Billing = () =>{
    const [selectedChart, setSelectedChart] = useState("Premium");
    const [selectedTime, setSelectedTime] = useState("Monthly");

    const handleChartClick = (chartName) => {
        setSelectedChart(chartName);
    };
    const handleTimeClick = (Time) => {
        setSelectedTime(Time);
    };
    return (
        <>
            <div className="Billing_page">
                <div className="Billing">
                    <div style={{display:'flex',gap:'15px'}}>
                        <h1>Our Pricing</h1>
                        <h1 className="is_simple">is Simple</h1>
                    </div>
                    <div className="sub_heading">
                    <h3>
                        No Setup & Monthly Cost waived off till 31st March We only earn if you earn
                    </h3>
                   <div className="time_buttons">
                        <button className={`${selectedTime==="Monthly"?"selected":""}`} onClick={()=>handleTimeClick("Monthly")}>Monthly</button>
                        <button className={`${selectedTime==="Quarterly"?"selected":""}`} onClick={()=>handleTimeClick("Quarterly")}>Quarterly</button>
                        <button className={`${selectedTime==="Yearly"?"selected":""}`} onClick={()=>handleTimeClick("Yearly")}>Yearly</button>
                   </div>
                   </div>
                   <div class="square"></div>

                   <div className="price_chart">
                    <div className={`chart_container ${selectedChart === "Starter Plan" ? "selected" : ""}`}>
                        <div className={`chart`} onClick={() => handleChartClick("Starter Plan")}>
                            <div className="heading">
                                Starter Plan
                            </div>
                            <div className="content">
                                <div className="price">
                                    <h1>₹999</h1>
                                    <h2 className="strikethrough">1999</h2>
                                </div>
                                <div className="per_month">per month</div>
                                <button>
                                    {selectedChart === "Starter Plan" ?<Image3 />:<Image1 />}
                                    Get Started
                                </button>
                                <div className="list_of_feature">
                                    <div className="feature"> <Image2/> Only Free Events Can host</div>
                                    <div className="feature"> <Image2/> Brand Color Page</div>
                                    <div className="feature"> <Image2/> WhatsApp Transactional/Reminder</div>
                                    <div className="feature"> <Image2/> Email Transactional/reminder</div>
                                    <div className="feature"> <Image2/> Certificate for attendee</div>
                                    <div className="feature"> <Image2/> Automated Marketing Graphics</div>
                                    <div className="feature"> <Image2/> Inbuilt Referral System for attendee</div>
                                    <div className="feature"> <Image2/> Download User Data</div>
                                    <div className="feature"> <Image2/> Detailed Analysis</div>
                                    <div className="feature"> <Image2/> Upto 5 Events</div>
                                    <div className="feature"> <Image2/> Up to 50 users + 5 Rupees/user</div>
                                    <div className="feature"> <Image2/> Download User Data</div>
                                </div>
                                <button className="host_button" style={{width:'90%'}}>
                                {selectedChart === "Starter Plan" ?<Image3 />:<Image1 />}
                                    Host Event
                                </button>
                            </div>
                        </div>
                        </div>
                    <div className={`chart_container ${selectedChart === "Premium" ? "selected" : ""}`}>    
                        <div className={`chart`} onClick={() => handleChartClick("Premium")}>
                            <div className="heading">
                                Premium (Recommended)
                            </div>
                            <div className="content">
                                <div className="price">
                                    <h1>₹999</h1>
                                    <h2 className="strikethrough">1999</h2>
                                </div>
                                <div className="per_month">per month + 10% of revenue</div>
                                <button>
                                {selectedChart === "Premium" ?<Image3 />:<Image1 />}
                                    Get Started
                                </button>
                                <div className="list_of_feature">
                                    <div className="feature"> <Image2/>Unlimited Events</div>
                                    <div className="feature"> <Image2/> Unlimited User Registration</div>
                                    <div className="feature"> <Image2/> Domestic / International Payment</div>
                                    <div className="feature"> <Image2/> Abandoned Cart Funnel</div>
                                    <div className="feature"> <Image2/> Recommendation to increase </div>
                                </div>
                                <button className="host_button" style={{width:'90%'}}>
                                {selectedChart === "Premium" ?<Image3 />:<Image1 />}
                                    Host Event
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className={`chart_container ${selectedChart === "Pricing at Scale" ? "selected" : ""}`}>
                        <div className={`chart`} onClick={() => handleChartClick("Pricing at Scale")}>
                            <div className="heading">
                                Pricing at Scale
                            </div>
                            <div className="content">
                                <div className="price">
                                    <h1 style={{fontWeight:"400"}}>CUSTOM</h1>
                                    {/* <h2 className="strikethrough">1999</h2> */}
                                </div>
                                <div className="per_month">Contact us for customised pricing at scale</div>
                                <button>
                                    {selectedChart === "Pricing at Scale" ?<Image3 />:<Image1 />}
                                    Get Started
                                </button>
                                <div className="list_of_feature">
                                    
                                </div>
                                <button className="host_button last_host_button" style={{width:'90%'}}>
                                    {selectedChart === "Pricing at Scale" ?<Image3 />:<Image1 />}
                                    Host Event
                                </button>
                            </div>
                        </div>
                        </div>
                   </div>
                   <div className="table-container">
                        <table className="responsive-table">
                            <thead>
                            <tr>
                                <th>
                                    <h1>Compare plans</h1>
                                    <h3>Find one that’s right for you</h3>
                                </th>
                                <th>
                                    <h1>Starter Plan</h1>
                                    <button><Image4 /> Start Free Trial</button>
                                </th>
                                <th>
                                    <h1>Premium Plan</h1>
                                    <button><Image4/> Start Free Trial</button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* <!-- Rows --> */}
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Host Free Event</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Host Paid Event</div></td>
                                <td>-</td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Brand Color Page</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>WhatsApp Transactional/Reminder</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Host Paid Event</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Certificate for attendee</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Automated Marketing Graphics</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Inbuilt Referral System for attendee</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Detailed Analysis</div></td>
                                <td><Image2/></td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Number of Events</div></td>
                                <td>Upto 5 Events</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Number of users Can Register</div></td>
                                <td>Up to 50 users + 5 Rupees/user</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Domestic / International Payment</div></td>
                                <td>-</td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Abandoned Cart Funnel</div></td>
                                <td>-</td>
                                <td><Image2/></td>
                            </tr>
                            <tr>
                                <td><div style={{marginLeft:'20px'}}>Recommendation for new page if low conversion rate</div></td>
                                <td>-</td>
                                <td><Image2/></td>
                            </tr>
                            {/* <!-- Add more rows as needed --> */}
                            {/* <!-- Fifteen rows in total --> */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>   
        </>
    )
}
export default Billing;