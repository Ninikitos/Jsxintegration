import React from '../../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { View, Text, Button, GridLayout } from '../../node_modules/magic-script-components/src/components.js';

class GridLayoutComp extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      aligment: "center-center",
      index: 0
    });

    _defineProperty(this, "onButtonClick", () => {
      this.setState(state => ({
        aligment: this.newAligment[this.state.index],
        index: state.index < this.newAligment.length - 1 ? state.index + 1 : state.index = 0
      }));
      print(this.state.index);
      print(this.state.aligment);
    });

    _defineProperty(this, "newAligment", ["top-left", "top-center", "top-right", "center-left", "center-center", "center-right", "bottom-left", "bottom-center", "bottom-right"]);
  }

  render() {
    const moons = ["Europa", "Ganymede", "Io", "Callisto", "Valetudo", "Amalthea", "Metis", "Ananke", "Carme"];
    return React.createElement(View, {
      name: "main-view"
    }, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a GridLayout Component"), React.createElement(Button, {
      localPosition: [0, -0.3, 0],
      height: 0.1,
      onClick: this.onButtonClick
    }, "Change Alignment"), React.createElement(GridLayout, {
      columns: 3,
      rows: 3,
      height: 0.6,
      width: 0.4,
      defaultItemAlignment: this.state.aligment,
      defaultItemPadding: [0.02, 0.02, 0.02, 0.02],
      localPosition: [-0.25, 0.25, 0]
    }, moons.map((moon, index) => React.createElement(Text, {
      textSize: 0.05,
      key: index,
      text: moon
    }))));
  }

}

export default GridLayoutComp;
