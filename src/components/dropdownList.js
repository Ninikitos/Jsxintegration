import React from "react";
import { View, DropdownList, DropdownListItem } from "magic-script-components";

class DropDownListComp extends React.Component {
  state = { selectedId: undefined };

  onSelection = eventData => {
    console.log("Selected items:", eventData.SelectedItems);
  };

  render() {
    const moons = [
      "Europa",
      "Ganymede",
      "Io",
      "Callisto",
      "Valetudo",
      "Amalthea"
    ];

    return (
      <View name="main-view">
        <DropdownList
          localPosition={[0, 0.2, 0]}
          text="Select Moon"
          textSize={0.1}
          iconColor={[0.5, 1.0, 0.5, 0.8]}
          onSelectionChanged={this.onSelection}
          multiSelect={true}
          showList={false}
        >
          {moons.map((moon, index) => (
            <DropdownListItem id={index} label={moon} />
          ))}
        </DropdownList>
      </View>
    );
  }
}

export default DropDownListComp;
