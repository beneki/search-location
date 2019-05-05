import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import LocationCard from "./LocationCard";
import Grid from "@material-ui/core/Grid";
import { fetchDataStart, addLocation, omitLocation } from "../actions";
import IntegrationAutosuggest from "./IntegrationAutosuggest";
import { put } from "redux-saga/effects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 35.7006177,
      lon: 51.4013785,
      zoom: 13
    };
  }

  renderLocationHistory(locations) {
    return locations.map(loc => {
      return (
        <LocationCard
          key={loc.place_id}
          location={loc}
          changeLocHistory={this.changeLocHistory}
        />
      );
    });
  }

  changeLocHistory = (location, isAdd) => {
    if (isAdd) {
      this.props.addLocation(location);
    } else {
      this.props.omitLocation(location);
    }
  };

  renderLocation = location => {
    this.setState({
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon)
    });
    this.changeLocHistory(location, true);
  };

  render() {
    // this.props.suggested && this.props.getSuggestedLocations("teh");
    const position = [this.state.lat, this.state.lon];
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={6}>
            <Map
              style={{ height: "500px", width: "100%", margin: "0 auto" }}
              center={position}
              zoom={this.state.zoom}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </Map>
          </Grid>
        </Grid>
        <Grid container spacing={24} justify="center">
          <Grid item xs={6}>
            {this.props.suggested && (
              <IntegrationAutosuggest
                getSuggestedLocations={this.props.getSuggestedLocations.bind(
                  this
                )}
                renderLocation={this.renderLocation}
                suggested={this.props.suggested}
              />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={24} justify="center">
          <Grid item xs={6}>
            {this.props.locationHistory.length > 0 &&
              this.renderLocationHistory(this.props.locationHistory)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const { suggested, locationHistory } = state.main;
    return {
      suggested,
      locationHistory
    };
  },
  mapDispatchToProps = dispatch => {
    return {
      getSuggestedLocations: payload => dispatch(fetchDataStart(payload)),
      addLocation: payload => dispatch(addLocation(payload)),
      omitLocation: payload => dispatch(omitLocation(payload))
    };
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
