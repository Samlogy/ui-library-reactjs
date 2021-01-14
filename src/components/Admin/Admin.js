import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';

import { BsArrowLeft, BsArrowRight} from 'react-icons/bs';

import { NavBar } from '../'

import './style.css';

  const SidebarData = [
            { title: 'Home',
              path: '/home',
              icon: <AiIcons.AiFillHome />,
              iconClosed: <RiIcons.RiArrowDownSFill />,
              iconOpened: <RiIcons.RiArrowUpSFill />, },
            {  title: 'Write a Post',
                path: '/write',
                icon: <IoIcons.IoIosPaper />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
            },
            {  title: 'Edit a Post',
                path: '/edit',
                icon: <IoIcons.IoIosPaper />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
            },
            { title: 'Notifications',
              path: '/notifications',
              icon: <FaIcons.FaEnvelopeOpenText />,
              iconClosed: <RiIcons.RiArrowDownSFill />,
              iconOpened: <RiIcons.RiArrowUpSFill />, 

              subNav: [
                { title: 'All Notification',
                  path: '/edit',
                  icon: <IoIcons.IoIosPaper />,
                  cName: 'sub-nav' },
                { title: 'Posts Notification',
                  path: '/edit',
                  icon: <IoIcons.IoIosPaper />,
                  cName: 'sub-nav' },
                { title: 'Contact Notification',
                  path: '/write',
                  icon: <IoIcons.IoIosPaper />,
                  cName: 'sub-nav' },
                { title: 'Comment Notification',
                path: '/write',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav' },  
              ]
            },
            { title: 'My Account',
              path: '/myAccount',
              icon: <IoIcons.IoMdHelpCircle /> }
  ];

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);


  const showSubnav = () => setSubnav(!subnav);
  const ShowSubMenu = ({ item }) => {
    return (
      <>
        <Link className="SidebarLink" to={item.path} onClick={item.subNav && showSubnav}>
            <div className="itemLabel"> {item.icon} <span className="SidebarLabel"> {item.title} </span> </div>
            <div> { item.subNav && subnav ? item.iconOpened : item.subNav  ? item.iconClosed : null } </div>
        </Link>

        {subnav && item.subNav.map((item, index) => {
              return (
                <Link className="DropdownLink" to={item.path} key={index}>
                  {item.icon} <span className="SidebarLabel"> {item.title} </span> </Link> ) })}
      </>
    );
  };
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* <NavBar /> */}
        
        
        <Link className="NavIcon-open" to='#'>
          { subnav ? <BsArrowLeft onClick={showSidebar} /> : <BsArrowRight onClick={showSidebar} /> }
        </Link>
        <nav className={sidebar ? "SidebarNav show" : "SidebarNav"}>
            
          <div className="SidebarWrap">
            { SidebarData.map((item, index) => { return ShowSubMenu({ item }) }) } 

            <Link className="NavIcon-close" to='#'>
              { subnav ? <BsArrowRight onClick={showSidebar} /> : <BsArrowLeft onClick={showSidebar} /> }
           </Link>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;