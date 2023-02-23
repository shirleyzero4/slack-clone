import { Add, Apps, BookmarkBorder, Create, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, InsertComment, PeopleAlt } from '@mui/icons-material';
import React, {useState, useEffect} from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import db from "./firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //Run this effect when the sidebar component loads
    db.collection("rooms").onSnaphot((snapshot) => 
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id, 
          name: doc.data().name
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-info'>
                <h2>React Channel</h2>
                <h3>
                    <FiberManualRecord />
                    Shirley Nguyen
                </h3>
            </div>
            <Create />
        </div>
        <SidebarOption Icon={InsertComment} title="Threads"/>
        <SidebarOption title="Threads"/>
        <SidebarOption Icon={BookmarkBorder} title="Bookmarked" />
        <SidebarOption Icon={Apps} title="Apps" />
        <SidebarOption Icon={FileCopy} title="Files" />
        <SidebarOption Icon={PeopleAlt} title="People" />
        <SidebarOption Icon={ExpandLess} title="Show Less" />
        <hr />
        <SidebarOption Icon={ExpandMore} title="Channels" />
        <hr />
        <SidebarOption Icon={Add} title="Add Channel" />

        {/* Connect to database and list all the channels */}
        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id} />
        ))}
    </div>
  )
}

export default Sidebar