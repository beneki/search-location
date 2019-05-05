import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./../assets/styles/LocationCard.scss";

const LocationCard = props => {
  const { location, classes, changeLocHistory } = props,
    { display_name, lat, lon } = location;
  return (
    <div className="shadow-container">
      <div className="card-container">
        <Card className="card">
          <CardActions className="card-action">
            <Button
              size="small"
              onClick={() => changeLocHistory(location, false)}
            >
              X
            </Button>
          </CardActions>
          <CardContent className="content">
            <Typography className="title" color="textSecondary" gutterBottom>
              Location :
            </Typography>
            <Typography component="p">{display_name}</Typography>
            <Typography className="pos" color="textSecondary">
              Point:
            </Typography>
            <Typography component="p">
              Latitude : {lat}
              <br />
              Longitude : {lon}
            </Typography>
          </CardContent>
        </Card>
        {/* <Card className={classes.card}>
          <CardActions className={classes.cardAction}>
            <Button
              className={classes.cardActionButton}
              size="small"
              onClick={() => changeLocHistory(location, false)}
            >
              X
            </Button>
          </CardActions>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Location :
            </Typography>
            <Typography component="p">{display_name}</Typography>
            <Typography className={classes.pos} color="textSecondary">
              Point:
            </Typography>
            <Typography component="p">
              Latitude : {lat}
              <br />
              Longitude : {lon}
            </Typography>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default LocationCard;
