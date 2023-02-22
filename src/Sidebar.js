import { Create, FiberManualRecord, InsertComment } from '@mui/icons-material';
import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-info'>
                <h2>Shirley Nguyen</h2>
                <h3>
                    <FiberManualRecord />
                    Shirley Nguyen
                </h3>
            </div>
            <Create />
            <SidebarOption Icon={InsertComment} title="Threads"/>
        </div>
    </div>
  )
}

export default Sidebar