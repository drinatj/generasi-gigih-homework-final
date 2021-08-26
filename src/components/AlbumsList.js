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

const AlbumsList = ({ albums }) => {
  AlbumsList.propTypes={
    albums: PropTypes.array.isRequired
  }
  const classes = useStyles();
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card className={classes.rootCard}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Album"
                        height="200"
                        image={album.images[0].url}
                        title={album.name}
                    />
                  </CardActionArea>
                  <a
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    <Fab aria-label="add" className={classes.playIcon}>
                      <PlayArrowIcon />
                    </Fab>
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                    {album.name}
                    </Typography>
                    <Typography variant="body2"  component="p">
                    By {album.artists.map((artist) => artist.name).join(', ')}
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
    </React.Fragment>
  );
};

export default AlbumsList;
