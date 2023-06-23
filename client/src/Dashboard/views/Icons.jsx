import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import ReplyIcon from '@mui/icons-material/Reply';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';



export const sentIcon = <ForwardToInboxOutlinedIcon sx={{color:"#0088FE"}}/>

export const deliveredIcon = <MarkEmailUnreadOutlinedIcon color="success"/>

export const readIcon = <MarkEmailReadOutlinedIcon color="primary"/>

export const clickedIcon = <ScheduleSendIcon sx={{color:"#1de9b6"}}/>

export const replayedIcon = <ReplyIcon color="warning"/>

export const failedIcon = <SmsFailedOutlinedIcon sx={{color:"white"}}/>
