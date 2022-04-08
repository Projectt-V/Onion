import React from 'react'
import { ProfileStyle, ProfileBody, ProfileLeft, ProfileDp, BoldText, UserInfo, UserInfoPouch, BioDiv, BioDivLeft, BioDivRight, EditButton, MessageBody, MessageFeedBody } from '../styles/ProfilePageStyle';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';
import { Icon } from '@iconify/react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import red from '@material-ui/core/colors/red';



function ProfilePage() {
    const useStyles = makeStyles((theme) => ({
        root: {
            transform: 'translateZ(10px)',
            flexGrow: 1,
        },
        exampleWrapper: {
            position: 'relative',
            marginTop: theme.spacing(3),
            height: 380,
        },
        radioGroup: {
            margin: theme.spacing(1, 0),
        },
        speedDial: {
            position: 'fixed',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                bottom: theme.spacing(8),
                left: theme.spacing(2),
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                top: theme.spacing(2),
                left: theme.spacing(2),
            },
        },
    }));

    const actions = [
        { icon: <EditIcon />, name: 'Edit Profile' },
        { icon: <AddBoxIcon />, name: 'Create Post' },
    ];

    const classes = useStyles();
    const [direction, setDirection] = React.useState('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };



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
                            <p style={bioStyle}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            </p>
                        </BioDivRight>
                    </BioDiv>
                      <EditButton>
                        <SpeedDial
                            ariaLabel="SpeedDial example"
                            className={classes.speedDial}
                            hidden={hidden}
                            icon={<EditIcon />}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            open={open}
                            direction={direction}
                        >
                            <SpeedDialAction
                                key={actions[0].name}
                                icon={actions[0].icon}
                                tooltipTitle={actions[0].name}
                                onClick={handleClose}
                            />
                            <SpeedDialAction
                                key={actions[1].name}
                                icon={actions[1].icon}
                                tooltipTitle={actions[1].name}
                                onClick={handleClose}
                            />
                        </SpeedDial>
                     </EditButton>
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