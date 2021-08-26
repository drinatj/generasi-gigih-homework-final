import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonLogin: {
      borderRadius: 15,
      backgroundColor: "#dabdbe",
      padding: "10px 25px",
      fontSize: "12px",
      color: "#1B2021",
      outline: "none",
      boxShadow: "0 5px #999",
      '&:hover' : {
        backgroundColor: "#dfa7a9"
      },
      '&:active' : {
        backgroundColor: "#dfa7a9",
        boxShadow: "0 5px #999",
        transform: "translateY(4px)",
      }
    },
    root: {
      padding: '2px 2px',
      display: 'flex',
      alignItems: 'center',
      width: 200,
      height: 30,
      border: "3px solid #dabdbe"
    },
    input: {
      marginLeft: "10px",
      flex: 1,
    },
    iconButton: {
      padding: 5,
    },
    divider: {
      height: 20,
      margin: 4,
    },
    rootCard: {
      width: 240,
      marginRight: 30,
      marginBottom: 30,
      backgroundColor: "#1B2021",
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      marginTop: -30,
      color: "#ffff"
    },
    cover: {
      width: 151,
    },
    playIcon: {
      bottom: theme.spacing(3),
      left: theme.spacing(20),
      backgroundColor: "#dabdbe",
    },
    buttonLoad: {
      borderRadius: 15,
      backgroundColor: "#dabdbe",
      padding: "10px 25px",
      fontSize: "12px",
      color: "#000",
      outline: "none",
      boxShadow: "0 5px #999",
      '&:hover' : {
        backgroundColor: "#dfa7a9",
        boxShadow: "0 5px #1B2021",
        color: "#000"
      },
      '&:active' : {
        backgroundColor: "#dfa7a9",
        boxShadow: "0 5px #999",
        transform: "translateY(4px)",
      }
    },
    buttonSelect: {
      borderRadius: 10,
      backgroundColor: "#dabdbe",
      padding: "5px 15px",
      fontSize: "12px",
      color: "#000",
      outline: "none",
      boxShadow: "0 3px #999",
      '&:hover' : {
        backgroundColor: "#dfa7a9",
        color: "#000"
      },
      '&:active' : {
        backgroundColor: "#dfa7a9",
        boxShadow: "0 5px #999",
        transform: "translateY(4px)",
      }
    },
    cardButton:{
      marginTop: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 10
    },
    rootAvatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      bottom: 8
    },
    modalCreatePlaylist: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paperCreatePlaylist: {
      backgroundColor: '#FFF',
      borderRadius: 20,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    buttonCreatePlaylist: {
      borderRadius: 15,
      backgroundColor: "#dabdbe",
      padding: "10px 20px",
      fontSize: "12px",
      color: "#1B2021",
      outline: "none",
      '&:hover' : {
        backgroundColor: "#dfa7a9"
      },
      '&:active' : {
        backgroundColor: "#dfa7a9",
      }
    },
    rootCreatePlaylist: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
  '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
    submitSave:{
      backgroundColor:'#1ed760',
      color: '#1B2021',
      '&:hover': {
        backgroundColor: '#1db954',
        borderColor: '#0F6C13',
        boxShadow: 'none',
      },
    },
  }),
);