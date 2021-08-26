import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {useStyles} from '../customUi';
import PropTypes from 'prop-types';

const PlayList = ({ playlist }) => {

  PlayList.propTypes={
    playlist: PropTypes.array.isRequired
  }
  const classes = useStyles();
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card className={classes.rootCard}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Playlist"
                        height="200"
                        image={item.images[0].url} 
                        title={item.name}
                    />
                  </CardActionArea>
                    <a
                      target="_blank"
                      href={item.external_urls.spotify}
                      rel="noopener noreferrer"
                      className="card-image-link"
                    >
                      <Fab aria-label="add" className={classes.playIcon}>
                        <PlayArrowIcon />
                      </Fab>
                    </a>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                    </Typography>
                    <Typography variant="body2"  component="p">
                    {item.owner.display_name}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardButton}>
                    <Button size="small" className={classes.buttonSelect}>
                      Select
                    </Button>
                  </CardActions>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlayList;
