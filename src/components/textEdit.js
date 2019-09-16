import React from 'react';
import { View, Text, TextEdit } from 'magic-script-components';

class TextEditComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.9, 0.550, 0]} textSize={0.03}>Center aligment</Text>
        <TextEdit
          localPosition={[-0.9, 0.5, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.03}
          padding={[0.5, 0.3, 0.5, 0.3]}
          textAlignment="center"
          lineSpacing={0.3}
          charSpacing={0.02} />
        <Text localPosition={[-0.9, 0.350, 0]} textSize={0.03}>Right aligment</Text>
        <TextEdit
          localPosition={[-0.9, 0.3, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.04}
          textColor={[0.732, 0.265, 0.469, 1]}
          textAlignment="right"></TextEdit>
        <Text localPosition={[-0.9, 0.150, 0]} textSize={0.03}>Left aligment. Entery URL</Text>
        <TextEdit
          localPosition={[-0.9, 0.1, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.05}
          textAlignment="left"
          textEntry="url"></TextEdit>
        <Text localPosition={[-0.9, -0.150, 0]} textSize={0.03}>Entery Numeric</Text>
        <TextEdit
          localPosition={[-0.9, -0.2, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.06}
          textEntry="numeric"></TextEdit>
        <Text localPosition={[-0.9, -0.350, 0]} textSize={0.03}>Entery None</Text>
        <TextEdit
          localPosition={[-0.9, -0.4, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.07}
          textEntry="none"></TextEdit>
        <Text localPosition={[-0.2, 0.550, 0]} textSize={0.03}>ScrollBarVisibility Always</Text>
        <TextEdit
          localPosition={[-0.2, 0.5, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.03}
          scrollBarVisibility="always"></TextEdit>
        <Text localPosition={[-0.2, 0.350, 0]} textSize={0.03}>ScrollBarVisibility Auto + Multiline</Text>
        <TextEdit
          localPosition={[-0.2, 0.3, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.04}
          scrollBarVisibility="auto"
          multiline={true}
          scrolling={true}
          cursorEdgeScrollMode="auto"
          scrollSpeed={0.1}
          scrollValue={0.2}></TextEdit>
        <Text localPosition={[-0.2, 0.150, 0]} textSize={0.03}>Password Mode on</Text>
        <TextEdit
          localPosition={[-0.2, 0.1, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.05}
          password={true}></TextEdit>
        <Text localPosition={[0.4, 0.550, 0]} textSize={0.03}>This is Text Edit component</Text>
        <TextEdit
          localPosition={[0.4, 0.5, 0]}
          text="Edit Me"
          width={0.4}
          height={0.08}
          textSize={0.03}
          style='italic'
          weight='bold'
          hint="This is a hint."
          hintColor={[0.732, 0.265, 0.469, 1]}></TextEdit>
      </View>
    );
  }
}

export default TextEditComp;
