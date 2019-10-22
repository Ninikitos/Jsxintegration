import React from '../../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { View, DropdownList, DropdownListItem } from '../../node_modules/magic-script-components/src/components.js';

class DropDownListComp extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedId: undefined
    });

    _defineProperty(this, "onSelection", eventData => {
      console.log("Selected items:", eventData.SelectedItems);
    });
  }

  render() {
    const moons = ["Europa", "Ganymede", "Io", "Callisto", "Valetudo", "Amalthea"];
    return React.createElement(View, {
      name: "main-view"
    }, React.createElement(DropdownList, {
      localPosition: [0, 0.2, 0],
      text: "Select Moon",
      textSize: 0.1,
      iconColor: [0.5, 1.0, 0.5, 0.8],
      onSelectionChanged: this.onSelection,
      multiSelect: true,
      showList: false
    }, moons.map((moon, index) => React.createElement(DropdownListItem, {
      id: index,
      label: moon
    }))));
  }

}

export default DropDownListComp;
