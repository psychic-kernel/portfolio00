'use client';

import {useState, useEffect} from 'react';
import { Button, Drawer } from 'antd';
import bgImage from "@/public/assets/bg-image.jpg";
import { FaCheckSquare, FaStar, FaReply, FaReplyAll, FaExclamationTriangle, FaExclamationCircle, FaArrowUp, FaArrowDown, FaArrowsAltV, FaArrowsAltH, FaPaperclip} from 'react-icons/fa';
import { HiDotsVertical } from "react-icons/hi";

import { Input, Space } from 'antd';
const { Search } = Input;
export default function Inbox() {
    const data = [
        {id:1,from:"Wikizz",to:"Onfre Coke",date:"7/9/2022",subject:"Honorable",mailed_by:"Ermin Readings",signed_by:"Tracy Taile",message:"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: false},
        {id:2,from:"Mycat",to:"Lenard Meatcher",date:"7/9/2022",subject:"Mrs",mailed_by:"Franchot Huton",signed_by:"Moshe Dudmesh",message:"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: true},
        {id:3,from:"Thoughtworks",to:"Johannah Dooler",date:"7/9/2022",subject:"Dr",mailed_by:"Ludovico Hammerberger",signed_by:"Griz Kinneally",message:"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: false},
        {id:4,from:"Aivee",to:"Byran Forsdyke",date:"7/9/2022",subject:"Rev",mailed_by:"Marget Chiverton",signed_by:"Rafaelita Maseyk",message:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: false},
        {id:5,from:"Buzzdog",to:"Mavis Hele",date:"7/9/2022",subject:"Honorable",mailed_by:"Corey Richichi",signed_by:"Pearline Michallat",message:"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: true},
        {id:6,from:"Gevee",to:"Noni Maffi",date:"7/9/2022",subject:"Rev",mailed_by:"Keslie Drayton",signed_by:"Thibaut Maunsell",message:"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: true},
        {id:7,from:"Dynava",to:"Welch Vallentin",date:"7/9/2022",subject:"Mr",mailed_by:"Wilbert Killingbeck",signed_by:"Evyn Cessford",message:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: false},
        {id:8,from:"Yodo",to:"Zane Chiplen",date:"7/9/2022",subject:"Rev",mailed_by:"Kerr Calbert",signed_by:"Doe Maundrell",message:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: true},
        {id:9,from:"Youtags",to:"Friedrick Godon",date:"7/9/2022",subject:"Ms",mailed_by:"Gilburt Murley",signed_by:"Nikaniki Doorly",message:"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ", star: <FaStar/>, isClicked: false},
        {id:10,from:"Reallinks",to:"Patsy Janeway",date:"7/9/2022",subject:"Honorable",mailed_by:"Meg Pawel",signed_by:"Zsazsa Braisher",message:"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", star: <FaStar/>, isClicked: false }
            
    ]

    const [inbox, setInbox] = useState(data);
    
    const [open, setOpen] = useState(false);
    //const [isClicked, setIsClicked] = useState(false);
    //const [className, setClassName] = useState('');
    

    useEffect(() => {
        setInbox(inbox);

        
    },[]);

    const toggleIsClicked = (id) => {
        // setInbox(prevData => ({
        //   ...prevData,
        //   isClicked: prevData.id === id ? !prevData.isClicked : prevData.isClicked
        // }));

        
    };

    const showDrawer = () => {
            setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
      };

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <main className="relative block w-fit mx-1 bg-slate-400" >
            
            <div className="relative flex flex-col w-fit p-1">
                <h1 className="relative inline text-3xl bottom-8" >Mailbox</h1>

                <Space direction="vertical">
                    <Search
                    placeholder="Search by sender or subject"
                    onSearch={onSearch}
                    style={{
                        width: 250,
                    }}
                    />
                </Space>
                
                {inbox.map((d) => {
                    return (
                            <div className="relative flex flex-col bg-cyan-50 bg-opacity-90 text-black mt-2 rounded-md" key={d.id}>
                                
                                <div className="relative inline-block my-1 mx-3"  >

                                     <span className="relative inline text-xl p-1 bg-red-500 bg-opacity-75 rounded-full">{d.from}</span> <br/>
                                     <span className="relative inline p-1 bg-red-500 bg-opacity-75 rounded-full">{d.subject}</span> 
                               
                                    <span className="relative inline float-right bottom-7 p-1 bg-red-500 bg-opacity-75 rounded-full">{d.date}</span> 
                                </div>   
                                <div className="relative flex  ml-5 mb-1"> 
                                    <span className="relative inline mx-3"><FaReply/></span>
                                    <span className="relative inline mx-3"><FaReplyAll/></span>
                                    <span className="relative inline mx-3"><FaPaperclip/></span>
                                    <span className="relative inline mx-3"><FaReplyAll/></span>
                                    <span className="relative inline mx-3"><FaReplyAll/></span>


                                </div>                     
                                
                                <div className="relative block w-fit mx-5">

                                    <div id="messageBoxElipsed" className="relative block">
                                        <Button className="z-40 p-3 hover:bg-slate-50" onClick={showDrawer}>
                                        <div className="relative block">{d.message.slice(0,70)} ...</div>
                                        </Button>
                                    </div>
                        

                                    <button type="button" id="faStar" onClick={() => toggleIsClicked(d.id)} >
                                        {d.star}
                                    </button>

                                    <Drawer title={d.subject} onClose={onClose} open={open}
                                    className="">
                                        <div className="relative inline">
                                                {d.message}
                                        </div>
                                    </Drawer>
                                    
                                </div>
                            </div>
                    )
                })}
            </div>
        </main>
    )
}; 