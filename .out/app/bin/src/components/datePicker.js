import React from '../../node_modules/react/index.js';
import { View, Text, DatePicker } from '../../node_modules/magic-script-components/src/components.js';

class DatePickerComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a DatePicker Component"), React.createElement(DatePicker, {
      label: "Select Date",
      labelSide: "left",
      color: [0.112, 0.655, 0.766, 1],
      defaultDate: "03/21/2019",
      showHint: false,
      height: 0.5,
      yearMin: 1990,
      yearMax: 2020,
      localScale: [2, 2, 0]
    }));
  }

}

export default DatePickerComp;
