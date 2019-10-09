import React from 'react';
import { View, DatePicker, Text } from 'magic-script-components';

class DatePickerComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a DatePicker Component</Text>
        <DatePicker
          label='This is label'
          labelSide='left'
          defaultDate='03/21/1990'
          color={[0.23, 0.13, 0.98, 1]}
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
