import React from '../../node_modules/react/index.js';
import { View, Text, Image } from '../../node_modules/magic-script-components/src/components.js';

class ImageComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-1, 0.5, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.2, 0.3],
        wrap: true
      }
    }, "Example 1"), React.createElement(Image, {
      localPosition: [-0.6, 0.450, 0],
      filePath: "res/car1.jpg",
      width: 0.3,
      height: 0.150
    }), React.createElement(Text, {
      localPosition: [-1, 0.2, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.2, 0.3],
        wrap: true
      }
    }, "Example 2"), React.createElement(Image, {
      localPosition: [-0.8, 0.150, 0],
      icon: "image",
      width: 0.03,
      height: 0.03
    }), React.createElement(Image, {
      localPosition: [-0.8, 0.1, 0],
      icon: "move",
      width: 0.03,
      height: 0.03
    }), React.createElement(Image, {
      localPosition: [-0.8, 0.050, 0],
      icon: "thumbs-up",
      width: 0.03,
      height: 0.03,
      opaque: true
    }), React.createElement(Image, {
      localPosition: [-0.6, 0.1, 0],
      filePath: "res/car2.jpg",
      width: 0.3,
      height: 0.150
    }), React.createElement(Text, {
      localPosition: [-1, -0.1, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.4, 0.2],
        wrap: true
      }
    }, "Example 3"), React.createElement(Image, {
      localPosition: [-0.7, -0.25, 0],
      width: 0.03,
      height: 0.03,
      color: [0.432, 0.123, 0.554, 1]
    }), React.createElement(Image, {
      localPosition: [-0.6, -0.25, 0],
      filePath: "res/car3.jpg",
      width: 0.3,
      height: 0.150,
      color: [0.432, 0.123, 0.554, 1]
    }), React.createElement(Text, {
      localPosition: [-0.3, 0.5, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.4, 0.2],
        wrap: true
      }
    }, "Example 4"), React.createElement(Image, {
      localPosition: [0.1, 0.450, 0],
      filePath: "res/img1.png",
      width: 0.1,
      height: 0.1,
      opaque: true
    }), React.createElement(Text, {
      localPosition: [-0.3, 0.2, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.4, 0.2],
        wrap: true
      }
    }, "Example 5"), React.createElement(Image, {
      localPosition: [0.1, 0.1, 0],
      filePath: "res/car2.jpg",
      width: 0.3,
      height: 0.150,
      useFrame: true
    }), React.createElement(Text, {
      localPosition: [-0.3, -0.1, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.4, 0.2],
        wrap: true
      }
    }, "Example 6"), React.createElement(Image, {
      localPosition: [0.1, -0.25, 0],
      filePath: "C:/Users/nilin/Desktop/jsxintegration/res/car3.jpg",
      width: 0.3,
      height: 0.150,
      useFrame: true,
      textCoords: [1, -1]
    }), React.createElement(Text, {
      localPosition: [0.3, 0.5, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.4, 0.2],
        wrap: true
      }
    }, "Example 7"), React.createElement(Image, {
      localPosition: [0.7, 0.450, 0],
      filePath: "res/img2.jpg",
      width: 0.4,
      height: 0.2
    }));
  }

}

export default ImageComp;
