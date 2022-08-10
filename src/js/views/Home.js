import React from "react"
import Navbar from "../components/Navbar"
import JoinedChats from "../components/JoinedChats"
import AvailableChats from "../components/AvailableChats"
import TitleView from "../components/shared/TitleView"
import { Outlet } from "react-router-dom"

export default function Home(){
    return (
        <div className='content-wrapper'>
            {/* <Outlet /> */}
            <Navbar />
            <div className="row no-gutters fh">
                <div className="col-3 fh">
                    <JoinedChats />
                </div>
                <div className="col-9 fh">
                    <TitleView />
                    <AvailableChats />
                </div>
            </div>
        </div>
      )
}