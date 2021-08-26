import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from '../customUi';


const CreatePlaylist = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
    <div className="bitch">
        <Button size="small" className={classes.buttonCreatePlaylist} onClick={handleOpen}>
            <AddIcon/>Create Playlist
        </Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modalCreatePlaylist}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
        <Fade in={open}>
          <div className={classes.paperCreatePlaylist}>
          <form className={classes.rootCreatePlaylist}>
            <TextField
              id="standard-basic"
              label="Title"
              multiline
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              color="#
              palette.secondary.dark"
            />
            <div>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" className={classes.submitSave}>
                Save
              </Button>
            </div>
          </form>
          </div>
        </Fade>
      </Modal>
    </div>
    )   
};

export default CreatePlaylist;