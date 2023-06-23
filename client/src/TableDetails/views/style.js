import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
    
    addBtn: {
        float: 'right',
        width: 'auto',
        padding: '  0px 20px !important',
        color:"white !important",
        backgroundColor: '#4eb54f !important',
        borderRadius: '5px !important',
        fontSize:"15px !important",
        height:"35px",
        margin: '0px 20px 0px 0px !important',


    },
    buttonUpdate: {
        float: 'right',
        width: 'auto',
        padding: '0px 20px !important',
        color:"white !important",
        backgroundColor: 'lightblue !important',
        borderRadius: '5px !important',
        fontSize:"15px !important",
        height:"35px",

    },
    saveBtn:{
        float: 'right',
        width: 'auto',
        padding: '0px 20px !important',
        color:"white !important",
        backgroundColor: 'green !important',
        borderRadius: '5px !important',
        fontSize:"15px !important",
        height:"35px",
    },

    cancelBtn:{
        float: 'right',
        width: 'auto',
        padding: ' 0px 20px !important',
        color:"white !important",
        backgroundColor: 'red !important',
        borderRadius: '5px !important',
        fontSize:"15px !important",
        height:"35px",
    },
   
}))
