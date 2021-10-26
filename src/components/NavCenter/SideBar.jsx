import React from 'react'

const SideBar = ({ openSideBar, setOpenSideBar}) => {
    return (
        <div>
            This IS THE SIDEBAR

            <div onClick={() => setOpenSideBar(!openSideBar)}>x</div>
        </div>
    )
}

export default SideBar
