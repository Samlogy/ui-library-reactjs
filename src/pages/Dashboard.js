import React from 'react';
import { HiPencilAlt } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa';

import { Time } from '../components';
// SideBar, Avatar, Accordion, Password, Notification, TriggerModal, Table, Spinner, Tabs
// DropDownMenu, NavBar, Button, Pagination, Switch, Result, BackToTop, Tooltip, Form 
// Admin, Alert, Card, Avatar, AvatarGroup, Date, CalendarPicker, ClockPicker, DateTime, Time, ShowPdf
// import './style.css';

//SlideShow

// import pdfFile from '../assets/file.PDF';
import img from '../assets/img.jpg'

const Dashboard = () => {

  // const panels = [
  //   {
  //     label: 'Seriously, Don\'t Use Icon Fonts',
  //     content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  //   },
  //   {
  //     label: 'Screen Readers Actually Read That Stuff',
  //     content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  //   },	
  //   {
  //     label: 'They Fail Poorly and Often',
  //     content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  //   },
  //   {
  //     label: 'They\'re a Nightmare if You\'re Dyslexic',
  //     content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
  //   },
  //   {
  //     label: 'There\'s Already a Better Way',
  //     content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
  //   },
  // ];

  // const params = {
  //   checked: true,
  //   round: true
  // }
  // const params = {
  //   type: 'success',
  //   message: 'Hello guys it\'s a success message !'
  // } 

  /* StepForm */
  // const Checkout = () => {
  //   return (
  //     <div>
  //     <p>Email: <input name="email" /></p>
  //     <p>Phone: <input name="Phone" /></p>
  //     </div>
  //   );
  // };
  // const Payment = () => {
  //   return (
  //     <div>
  //     <p>Email: <input name="email" /></p>
  //     </div>
  //   );
  // };
  // const Result = () => {
  //   return (
  //     <div>
      
  //     <p>Phone: <input name="Phone" /></p>
  //     </div>
  //   );
  // };
  // const steps = [
	// 	{ label: 'Checkout', component: Checkout(), exitValidation: false },
	// 	{ label: 'Payment', component: Payment() },
	// 	{ label: 'Result', component: Result() }
  // ];
  // const Finish = () => { alert('Norificatoin !!') };
  
  /* Rate params */
  // const [rate, setRate] = useState(1);
  // const handleChange = value => {setRate(rate) };

  /* Btn */
//   const custom = 'btn-info'
//  const label = 'Upload';
//  const type = 'button';
//  const icon = <BiUpload />;

/* Rate */
// const [rate, setRate] = useState({ value: 1, rated: false });
// const handleChange = (value) => { 
//   console.log(value)
//   setRate({...rate, value: rate.value });
// };
// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

/* Result */
// const status = 'success';
// const title = 'Successfully Purchased Cloud Server ECS!';
// const  msg = 'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.';

/* Alert */
// const type = 'info';
// const message = 'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. ';

/* Avatar */
// const grantImage = 'http://static.hudl.com/users/prod/5396331_c0c08c570daf469288760e2909c8e8e3.jpg';
// const list = [ 'Pete Campbell', 'Don Draper', 'Peggy Olsen', 
//                 'Roger M. Sterling', 'Joan', 'victor@auth0.com' ];

/* Tabs */
// const data = [
//   {id : '1',
//    tabTitle: "Tab 1",
//    tabContent: 'Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.'
//   },
//   {id : '2',
//    tabTitle: "Tab 2",
//    tabContent: 'Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.'
//   },
//   {id : '3',
//    tabTitle: "Tab 3",
//    tabContent: 'Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.'
//   }
// ];

/* Show PDR File */
// const onLoadSuccess = () => {
//   alert('file loaded successfully !')
// }

/* Card */
// const desc = 'Next.js is a React framework that ships with all the features you need for production. It gives you…';
// const title = 'Introduction Guide to Next.js';
// const tags = ['Next.js', 'beginner', 'javascript', 'front-End'];
// const readTime = 6;
// const createdAt = 'Aug 04, 2020';

/* Carousel */
// const carouselData = [
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
//   { title: 'Introduction Guide to Next.js', tags: ['Next.js', 'beginner', 'javascript', 'front-End'], desc: 'Next.js is a React framework that ships with all the features you need for production. It gives you…', readTime: 6, createdAt: 'Aug 04, 2020', avatar: 'Sakek Amara' },
// ];
// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

/* Drop Down Menu */
// const Menu = [
//   {  label: 'Delete', icon: <FaTrash /> },
//   {  label: 'Delete', icon: <HiPencilAlt /> },
//   {  label: 'All', icon: <FaTrash /> }
// ];

  return (
    <div className="dashboard-container">
        {/* <SideBar /> */}
        {/* { panels.map((el, index) =>  <Accordion key={index} title={el.label} content={el.content} /> ) } */}
        {/* <Notification /> */}
        {/* <TriggerModal /> */}
        {/* <Table /> */}
        {/* <Spinner /> */}
        {/* <DropDownMenu menu={Menu} /> */}
        {/* <NavBar /> */}
        {/* <Switch params={params} /> */}
        {/* <Search /> */}
        {/* <StepForm steps={steps} onFinish={Finish} alignment={'vertical'} /> */}
        {/* <Button className={custom} label={label} type={type} icon={icon} /> */}
        {/* <Password /> */}

        {/* <Pagination defaultNode={1} totalNodes={10} /> */}

        {/* <div className="rate-container">
            <Rate outOf={5} onChange={handleChange} defaultValue={1} />
            {rate.value ? <span className="ant-rate-text">{desc[rate.value - 1]}</span> : ''}
        </div> */}

        {/* <Result stutus={status} title={title} msg={msg} /> */}
        {/* <BackToTop /> */}
        {/* {<Alert type={type} msg={message} />} */}

        {/* <Table /> */}
        {/* <Tooltip data='tool tip data' label='data when hovered' /> */}
        {/* <Form /> */}

        {/* <Tabs data={data} /> */}
        {/* <AvatarGroup>
          { list.map((el, index) => 
            <Avatar name={el} size='xs' shape='circle' badge='offline' key={index} />  )}
        </AvatarGroup> */}

        {/* <Date range='true' />   // onChange value   */}
        {/* <DateTime range='true' />   // onChange value  */}
        {/* <Time range />   // onChange value    */}
        {/* <CalendarPicker /> // value onChange */}
        {/* <ClockPicker /> // value */}

        {/* <ShowPdf fileName={pdfFile} />  */}
        
        {/* <Card title={title} desc={desc} avatar='Sadek Amara' img={img} tags={tags} readTime={readTime}  createdAt={createdAt}/> */}

        
        {/* <SlideShow carouselData={carouselData} breakPoints={breakPoints} /> */}

    </div>
  );
};

export default Dashboard;
