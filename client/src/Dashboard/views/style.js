import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },

    textColor: {
        color: "black !important"
    },
    iconsize: {
        fontSize: "15px !important",

    },
    DataTable: {
        padding: "20px"
    },

    paperBackgound: {
        alignItems: "left",
        background: "rgb(244,246,247)",
        padding: "5px",
        background: "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(144,148,151,0.18820028011204482) 100%)",
    },

    sent: {
        alignItems: "left",
        // background: "rgb(244,246,247)",
        background:
            "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(0,136,254,0.5139705882352942) 100%)",
        padding: "5px",
    },
    delivered: {
        alignItems: "left",
        // background: "rgb(244,246,247)",
        background:
            "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(76,175,80,0.506687675070028) 100%)",
        padding: "5px",
    },
    read: {
        alignItems: "left",
        // background: "rgb(244,246,247)",
        background:
            "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(23,105,170,0.5120098039215687) 100%)",
        padding: "5px",
    },
    clicked: {
        alignItems: "left",
        // background: "rgb(244,246,247)",
        background:
            "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(29,233,182,0.5439425770308124) 100%)",
        padding: "5px",
        color: "black",
    },
    replied: {
        alignItems: "left",
        // background: "rgb(244,246,247)",
        background:
            "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(255,128,66,0.5047268907563025) 100%)",
        padding: "5px",
    },
    failed: {
        alignItems: "left",
        // background: "rgb(244,246,247)",
        background:
            "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(255,16,0,0.5947268907563025) 100%)",
        padding: "5px",
    }
});
