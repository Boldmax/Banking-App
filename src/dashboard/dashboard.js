import React from 'react'
import Nav from "./Nav";
import Dashboardbody from "./DashboardBody";
import HorizontalNav from "./HorizontalNav"


export default function Dashboard() {
    return (
        <div>
            <HorizontalNav />
            <div className="dashboard">
                <Nav />
                <Dashboardbody />
            </div>
        </div>
    )
}
