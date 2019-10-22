import React from "react";
import { View, GridLayout, Text, Button } from "magic-script-components";

class GridLayoutComp extends React.Component {
  state = {
    aligment: "center-center",
    index: 0
  }

  onButtonClick = () => {
      this.setState( state => ({
        aligment: this.newAligment[this.state.index],
        index: state.index < this.newAligment.length - 1 ? state.index + 1 : state.index = 0
      }));
      print(this.state.index);
      print(this.state.aligment);
  }

  newAligment = [
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center-center",
    "center-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ];

  render() {
    const moons = [
      "Europa",
      "Ganymede",
      "Io",
      "Callisto",
      "Valetudo",
      "Amalthea",
      "Metis",
      "Ananke",
      "Carme"
    ];

    return (
      <View name="main-view">
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a GridLayout Component</Text>
        <Button localPosition={[0, -0.3, 0]} height={0.1} onClick={this.onButtonClick}>Change Alignment</Button>
        <GridLayout
          columns={3}
          rows={3}
          height={0.4}
          width={0.7}
          defaultItemAlignment={this.state.aligment}
          defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
          localPosition={[-0.25, 0.25, 0]}
        >
          {moons.map((moon, index) => (
            <Text textSize={0.05} key={index} text={moon} />
          ))}
        </GridLayout>
      </View>
    );
  }
}

export default GridLayoutComp;
