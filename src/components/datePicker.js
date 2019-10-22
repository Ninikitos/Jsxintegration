import React from 'react';
import { View, DatePicker, Text } from 'magic-script-components';

class DatePickerComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a DatePicker Component</Text>
        <DatePicker
          label='Select Date'
          labelSide='left'
          color={[0.112, 0.655, 0.766, 1]}
          defaultDate='03/21/2019'
          showHint={false}
          height={0.5}
          yearMin={1990}
          yearMax={2020}
          localScale={[2, 2, 0]}
        />
      </View>
    );
  }
}

export default DatePickerComp;
