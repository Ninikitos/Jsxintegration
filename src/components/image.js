import React from 'react';
import { View, Text, Image } from 'magic-script-components';

class ImageComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-1, 0.5, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.2, 0.3], wrap: true })}>Example 1</Text>
        <Image localPosition={[-0.6, 0.450, 0]} filePath="res/car1.jpg" width={0.3} height={0.150}></Image>

        <Text localPosition={[-1, 0.2, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.2, 0.3], wrap: true })}>Example 2</Text>
        <Image localPosition={[-0.8, 0.150, 0]} icon="image" width={0.03} height={0.03}></Image>
        <Image localPosition={[-0.8, 0.1, 0]} icon="move" width={0.03} height={0.03}></Image>
        <Image localPosition={[-0.8, 0.050, 0]} icon="thumbs-up" width={0.03} height={0.03} opaque={true}></Image>
        <Image localPosition={[-0.6, 0.1, 0]} filePath="res/car2.jpg" width={0.3} height={0.150}></Image>

        <Text localPosition={[-1, -0.1, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.4, 0.2], wrap: true })}>Example 3</Text>
        <Image localPosition={[-0.7, -0.25, 0]} width={0.03} height={0.03} color={[0.432, 0.123, 0.554, 1]}></Image>
        <Image localPosition={[-0.6, -0.25, 0]} filePath="res/car3.jpg" width={0.3} height={0.150} color={[0.432, 0.123, 0.554, 1]}></Image>

        <Text localPosition={[-0.3, 0.5, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.4, 0.2], wrap: true })}>Example 4</Text>
        <Image localPosition={[0.1, 0.450, 0]} filePath="res/img1.png" width={0.1} height={0.1} opaque={true}></Image>

        <Text localPosition={[-0.3, 0.2, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.4, 0.2], wrap: true })}>Example 5</Text>
        <Image localPosition={[0.1, 0.1, 0]} filePath="res/car2.jpg" width={0.3} height={0.150} useFrame={true}></Image>

        <Text localPosition={[-0.3, -0.1, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.4, 0.2], wrap: true })}>Example 6</Text>
        <Image localPosition={[0.1, -0.25, 0]} filePath="C:/Users/nilin/Desktop/jsxintegration/res/car3.jpg" width={0.3} height={0.150} useFrame={true} textCoords={[1, -1]}></Image>

        <Text localPosition={[0.3, 0.5, 0]} textSize={0.03} boundsSize={({ boundsSize: [0.4, 0.2], wrap: true })}>Example 7</Text>
        <Image localPosition={[0.7, 0.450, 0]} filePath="res/img2.jpg" width={0.4} height={0.2}></Image>
      </View>
    );
  }
}

export default ImageComp;
