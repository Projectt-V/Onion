import React from 'react';
import { HomeStyle, HomeBody, MessageBody, MessageFeedBody } from '../styles/HomePageStyle';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';
import { NotificationBody, NotificationBox,NotificationHeader} from '../styles/NotificationStyle';
import Notification from '../components/Notification';


function NotificationPage() {
    
  return (
        <HomeStyle>
                <HomeBody>
                    <NotificationBody>
                        <NotificationBox>
                            <NotificationHeader>Today</NotificationHeader>
                            <Notification/>
                            <Notification/>  
                        </NotificationBox>

                        <NotificationBox>
                            <NotificationHeader>Yesterday</NotificationHeader>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/> 
                            <Notification/>
                            <Notification/>   
                        </NotificationBox>
                        <NotificationBox>
                            <NotificationHeader>This month</NotificationHeader>
                            <Notification/>
                            <Notification/> 
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/> 
                            <Notification/>
                            <Notification/>  
                        </NotificationBox>
                        <NotificationBox>
                            <NotificationHeader>Earlier</NotificationHeader>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/> 
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/> 
                            <Notification/>
                            <Notification/>    
                        </NotificationBox>

                    </NotificationBody>
                    
                    <MessageBody>
                        <MessageBoxHeader />
                        <MessageFeedBody>
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                        </MessageFeedBody>
                    </MessageBody>
                </HomeBody>
        </HomeStyle>
  )
}

export default NotificationPage