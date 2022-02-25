import React from 'react'
import { ProfileStyle, ProfileBody, ProfileLeft, ProfileDp, BoldText, UserInfo, UserInfoPouch, BioDiv, BioDivLeft, BioDivRight, MessageBody, MessageFeedBody } from '../styles/ProfilePageStyle';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';
import { Icon } from '@iconify/react';

function ProfilePage() {


    const dpStyle = {
        objectFit: "fill",
        height: "20vh",
        width: "10vw",
        paddingBottom: "20%"
    };

    const bioStyle = {
        letterSpacing: "1.5px",
        wordSpacing: "2px",
        fontFamily: "cursive"
    }

    return (

        <ProfileStyle>
            <ProfileBody>
                <ProfileLeft>
                    <ProfileDp>
                        {/* <img src="../logo.png" style={ dpStyle }/> */}
                        +
                    </ProfileDp>
                    <BoldText>
                        jeni_reo_123
                    </BoldText>

                    <UserInfo>
                        <UserInfoPouch>
                            <BoldText>
                                Followers
                            </BoldText>
                            <BoldText>
                                100K
                            </BoldText>
                        </UserInfoPouch>
                        <UserInfoPouch>
                            <BoldText>
                                Following
                            </BoldText>
                            <BoldText>
                                100K
                            </BoldText>
                        </UserInfoPouch>
                        <UserInfoPouch>
                            <BoldText>
                                Posts
                            </BoldText>
                            <BoldText>
                                100K
                            </BoldText>
                        </UserInfoPouch>
                        <UserInfoPouch>
                            <BoldText>
                                Badge
                            </BoldText>

                            <Icon icon="healthicons:award-ribbon" color=" #BB8403" height={45} />

                        </UserInfoPouch>
                    </UserInfo>
                    <BioDiv>
                        <BioDivLeft>
                            Autograph:
                        </BioDivLeft>
                        <BioDivRight>
                            <p style={ bioStyle }>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            </p>
                        </BioDivRight>
                    </BioDiv>
                </ProfileLeft>
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
            </ProfileBody>
        </ProfileStyle>
    )
}

export default ProfilePage