import { Add, Apps, BookmarkBorder, Create, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, InsertComment, PeopleAlt } from '@mui/icons-material';
import React, { useState, useEffect} from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";


function Sidebar() {
  const [channels, setChannels] = useState([]);

  const roomsCollection = collection(db, "rooms");
  useEffect(() => {
    const getRoomsList = async () => {
      try {
        const data = await getDocs(roomsCollection);
        const formatedData = data.docs.map((doc) => ({
          name: doc.data().name,
          id: doc.id,
        }));
        setChannels(formatedData);
      } catch(err) {
        console.error(err);
      }
    };

    getRoomsList();
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

export default Sidebar;