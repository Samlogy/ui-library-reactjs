import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
// import { Avatar, Badge } from 'antd';

import './style.css';

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const SidebarData = [
    {
      title: 'Overview',
      path: '/overview',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon: <IoIcons.IoIosPaper />
        }
      ]
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <IoIcons.IoIosPaper />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: 'Reports',
          path: '/reports/reports1',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Reports 2',
          path: '/reports/reports2',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Reports 3',
          path: '/reports/reports3',
          icon: <IoIcons.IoIosPaper />
        }
      ]
    },
    {
      title: 'Products',
      path: '/products',
      icon: <FaIcons.FaCartPlus />
    },
    {
      title: 'Team',
      path: '/team',
      icon: <IoIcons.IoMdPeople />
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,

      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: 'Message 1',
          path: '/messages/message1',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Message 2',
          path: '/messages/message2',
          icon: <IoIcons.IoIosPaper />
        }
      ]
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />
    }
  ];

  const showSubnav = () => setSubnav(!subnav);
  const ShowSubMenu = ({ item }) => {
    return (
      <>
        <Link className="SidebarLink" to={item.path} onClick={item.subNav && showSubnav}>
            <div> {item.icon} <span className="SidebarLabel"> {item.title} </span> </div>
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
        <div className="Nav">
          <Link className="NavIcon" to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
          
        <nav className={sidebar ? "SidebarNav show" : "SidebarNav"}>
            {/* <div className="sub-nav">
                <Badge count={100} overflowCount={99}>
                    { img && img ? <img src={img} /> : <Avatar icon={<UserOutlined />} /> }
                </Badge>

                <Logout />
            </div> */}
          <div className="SidebarWrap">
            <Link className="NavIcon" to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>     
               
            { SidebarData.map((item, index) => {
              return ShowSubMenu({ item }) }) }
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;

