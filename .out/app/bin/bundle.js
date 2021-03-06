var _ = (function (React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function Button (props) {
      // return (<button {...props} />);
      return React.createElement('button', props);
  }

  function Model (props) {
      // return (<model {...props} />);
      return React.createElement('model', props);
  }

  function Slider (props) {
      // return (<slider {...props} />);
      return React.createElement('slider', props);
  }

  function Text (props) {
      // return (<text {...props} />);
      return React.createElement('text', props);
  }

  function View (props) {
      // return (<view {...props} />);
      return React.createElement('view', props);
  }

  function Toggle (props) {
      return React.createElement('toggle', props);
  }

  function TextEdit (props) {
      // return (<textEdit {...props} />);
      return React.createElement('textEdit', props);
  }

  function Image (props) {
      // return (<image {...props} />);
      return React.createElement('image', props);
  }

  function ScrollBar (props) {
      // return (<scrollBar {...props} />);
      return React.createElement('scrollBar', props);
  }

  function ScrollView (props) {
      // return (<scrollView {...props} />);
      return React.createElement('scrollView', props);
  }

  function GridLayout (props) {
      // return (<gridLayout {...props} />);
      return React.createElement('gridLayout', props);
  }

  function DropdownList (props) {
      // return (<dropdownList {...props} />);
      return React.createElement('dropdownList', props);
  }

  function DropdownListItem (props) {
      // return (<dropdownListItem {...props} />);
      return React.createElement('dropdownListItem', props);
  }

  function Dialog (props) {
      // return (<dialog {...props} />);
      return React.createElement('dialog', props);
  }

  function ColorPicker (props) {
      // return (<colorPicker {...props} />);
      return React.createElement('colorPicker', props);
  }

  function DatePicker (props) {
      // return (<datePicker {...props} />);
      return React.createElement('datePicker', props);
  }

  function CircleConfirmation (props) {
      // return (<circleConfirmation {...props} />);
      return React.createElement('circleConfirmation', props);
  }

  function Content (props) {
      // return (<content {...props} />);
      return React.createElement('content', props);
  }

  function Audio (props) {
      // return (<audio {...props} />);
      return React.createElement('audio', props);
  }

  class TextComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-1, 0.380, 0],
        textSize: 0.04
      }, "Text Size = 0.04"), React.createElement(Text, {
        localPosition: [-1, 0.280, 0],
        textSize: 0.05
      }, "Text Size = 0.05"), React.createElement(Text, {
        localPosition: [-1, 0.180, 0],
        textSize: 0.06
      }, "Text Size = 0.06"), React.createElement(Text, {
        localPosition: [-0.4, 0.3, 0],
        textSize: 0.04,
        boundsSize: {
          boundsSize: [0.2, 0.1],
          wrap: true
        },
        textAlignment: 'center'
      }, "This text is align by center"), React.createElement(Text, {
        localPosition: [-0.4, 0.1, 0],
        textSize: 0.04,
        boundsSize: {
          boundsSize: [0.2, 0.1],
          wrap: true
        },
        textAlignment: 'right'
      }, "This text is align by right"), React.createElement(Text, {
        localPosition: [-0.4, -0.1, 0],
        textSize: 0.04,
        boundsSize: {
          boundsSize: [0.2, 0.1],
          wrap: true
        },
        textAlignment: 'left'
      }, "This text is align by left"), React.createElement(Text, {
        localPosition: [0.1, 0.3, 0],
        textSize: 0.03,
        boundsSize: {
          boundsSize: [0.2, 0.2],
          wrap: true
        },
        lineSpacing: 2
      }, "textSize = 0.04 and lineSpacing = 2"), React.createElement(Text, {
        localPosition: [0.1, 0.120, 0],
        textSize: 0.03,
        boundsSize: {
          boundsSize: [0.2, 0.1],
          wrap: true
        },
        lineSpacing: 1.5
      }, "textSize = 0.04 and lineSpacing = 1.5"), React.createElement(Text, {
        localPosition: [0.1, -0.180, 0],
        textSize: 0.03,
        boundsSize: {
          boundsSize: [0.2, 0.1],
          wrap: true
        },
        lineSpacing: 1
      }, "textSize = 0.04 and lineSpacing = 1"), React.createElement(Text, {
        localPosition: [-1, -0.3, 0],
        textSize: 0.03,
        style: "italic",
        weight: "extra-light"
      }, "This text is Italic and extra-light"), React.createElement(Text, {
        localPosition: [-1, -0.4, 0],
        textSize: 0.03,
        style: "normal",
        weight: "light"
      }, "This text is normal and light"), React.createElement(Text, {
        localPosition: [-1, -0.5, 0],
        textSize: 0.03,
        style: "italic",
        weight: "regular"
      }, "This text is Italic and regular"), React.createElement(Text, {
        localPosition: [-1, -0.6, 0],
        textSize: 0.03,
        style: "normal",
        weight: "medium"
      }, "This text is normal and medium"), React.createElement(Text, {
        localPosition: [-1, -0.7, 0],
        textSize: 0.03,
        style: "italic",
        weight: "bold"
      }, "This text is italic and bold"), React.createElement(Text, {
        localPosition: [-1, -0.8, 0],
        textSize: 0.03,
        style: "normal",
        weight: "extra-bold"
      }, "This text is normal and extra-bold"), React.createElement(Text, {
        localPosition: [-0.4, -0.3, 0],
        textSize: 0.06,
        textColor: [0.423, 0.255, 0.935, 1]
      }, "Colored Text"), React.createElement(Text, {
        localPosition: [-0.4, -0.4, 0],
        textSize: 0.04,
        allCaps: true
      }, "This text is set to all caps"), React.createElement(Text, {
        localPosition: [0.1, -0.3, 0],
        textSize: 0.04,
        charSpacing: 0.2
      }, "Spacing = 0.1 "), React.createElement(Text, {
        localPosition: [0.1, -0.4, 0],
        textSize: 0.04,
        charSpacing: 0.3
      }, "Spacing = 0.2 "), React.createElement(Text, {
        localPosition: [0.1, -0.5, 0],
        textSize: 0.04,
        charSpacing: 0.4
      }, "Spacing = 0.4 "));
    }

  }

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

  class ButtonComp extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        visible: true
      });

      _defineProperty(this, "isVisibleClick", event => {
        this.setState({
          visible: false
        });
      });
    }

    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.825, 0.5, 0],
        textSize: 0.03
      }, "Different text size"), React.createElement(Button, {
        localPosition: [-0.7, 0.4, 0],
        textSize: 0.04
      }, "Click Me"), React.createElement(Button, {
        localPosition: [-0.7, 0.2, 0],
        textSize: 0.05
      }, "Click Me"), React.createElement(Button, {
        localPosition: [-0.7, 0, 0],
        textSize: 0.06
      }, "Click Me"), React.createElement(Text, {
        localPosition: [-0.3, 0.5, 0],
        textSize: 0.03
      }, "Different text color"), React.createElement(Button, {
        localPosition: [-0.2, 0.4, 0],
        textSize: 0.04,
        textColor: [0.332, 0.988, 0.123, 1]
      }, "Click Me"), React.createElement(Text, {
        localPosition: [-0.3, 0.1, 0],
        textSize: 0.03
      }, "Different button roundness, 0.3"), React.createElement(Button, {
        localPosition: [-0.2, 0, 0],
        textSize: 0.04,
        roundness: 0.3
      }, "Click Me"), React.createElement(Text, {
        localPosition: [-0.3, -0.1, 0],
        textSize: 0.03
      }, "Different button roundness, 0.6"), React.createElement(Button, {
        localPosition: [-0.2, -0.2, 0],
        textSize: 0.04,
        roundness: 0.6
      }, "Click Me"), React.createElement(Text, {
        localPosition: [-0.3, -0.3, 0],
        textSize: 0.03
      }, "Different button roundness, 0.9"), React.createElement(Button, {
        localPosition: [-0.2, -0.4, 0],
        textSize: 0.04,
        roundness: 0.9
      }, "Click Me"), React.createElement(Text, {
        localPosition: [0.1, 0.5, 0],
        textSize: 0.03
      }, "Is enabled?"), React.createElement(Button, {
        localPosition: [0.2, 0.4, 0],
        textSize: 0.04,
        enabled: false
      }, "Click Me"), React.createElement(Text, {
        localPosition: [0.1, 0.1, 0],
        textSize: 0.03
      }, "Not default width and height"), React.createElement(Button, {
        localPosition: [0.2, -0.1, 0],
        textSize: 0.04,
        width: 0.2,
        height: 0.2
      }, "Click Me"), React.createElement(Text, {
        localPosition: [0.5, 0.5, 0],
        textSize: 0.03
      }, "Button + icon"), React.createElement(Button, {
        localPosition: [0.6, 0.4, 0],
        iconType: "thumbs-up",
        type: "icon",
        height: 0.1,
        visible: this.state.visible,
        onClick: this.isVisibleClick
      }), React.createElement(Text, {
        localPosition: [0.5, 0.2, 0],
        textSize: 0.03
      }, "Button + Icon + Text"), React.createElement(Button, {
        localPosition: [0.7, 0.1, 0],
        type: "text-with-icon",
        height: 0.1,
        iconType: "exit"
      }, "Click Me"));
    }

  }

  class AudioComp extends React.Component {
    render() {
      return React.createElement(View, {
        name: "main-view"
      }, React.createElement(Audio, {
        fileName: "res\\Recording.mp3",
        loadFile: true,
        action: "start"
      }));
    }

  }

  class CircleConfirmationComp extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        isCircleComplete: false
      });

      _defineProperty(this, "onConfirmationCanceled", event => {
        print("onConfirmationCanceled");
        this.setState(state => ({}));
      });

      _defineProperty(this, "onConfirmationUpdate", event => {
        print("onConfirmationUpdate");
      });

      _defineProperty(this, "onConfirmationComplete", event => {
        print("onConfirmationComplete");
        this.setState(state => {
          return {
            isCircleComplete: true
          };
        });
      });

      _defineProperty(this, "onDialogCancel", event => {
        print("onDialogCancel");
      });

      _defineProperty(this, "onDialogConfirm", event => {
        print("onDialogConfirm");
      });

      _defineProperty(this, "onTimeExpired", event => {
        print('onTimeExpired');
      });
    }

    render() {
      print("render");
      let dialog;

      if (this.state.isCircleComplete) {
        dialog = React.createElement(Dialog, {
          title: "Successfully completed confirmation",
          text: "Your device is ready for a new Mixed Reality seccion",
          type: "timed",
          expireTime: 0.1,
          layout: "standard",
          scrolling: false
        });
      }

      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.32, 0.3, 0],
        textSize: 0.04
      }, "This is a circleConfirmation Component"), React.createElement(CircleConfirmation, {
        onConfirmationCanceled: this.onConfirmationCanceled,
        onConfirmationComplete: this.onConfirmationComplete,
        onConfirmationUpdate: this.onConfirmationUpdate
      }), dialog);
    }

  }

  class ColorPickerComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a colorPicker Component"), React.createElement(ColorPicker, {
        height: 0.6,
        color: [0.339, 0.123, 0.991, 1]
      }));
    }

  }

  class ContentComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(ScrollView, {
        scrollBarVisibility: "always"
      }, React.createElement(ScrollBar, {
        width: 0.3,
        height: 0.6,
        thumbSize: 0.03,
        thumbPosition: 0,
        orientation: "vertical"
      }), React.createElement(Content, null, React.createElement(Text, {
        localPosition: [0, 0.4, 0],
        textSize: 0.03
      }, "Message Box1"), React.createElement(Text, {
        localPosition: [0, 0.3, 0],
        textSize: 0.03
      }, "Message Box2"), React.createElement(Text, {
        localPosition: [0, 0.2, 0],
        textSize: 0.03
      }, "Message Box3"), React.createElement(Text, {
        localPosition: [0, 0.1, 0],
        textSize: 0.03
      }, "Message Box4"))));
    }

  }

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

  class DialogComp extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        requestUserConfirmation: true,
        dismissNotification: false
      });

      _defineProperty(this, "onDialogCancel", event => {
        this.setState({
          requestUserConfirmation: false
        });
        console.log("User pressed Cancel");
      });

      _defineProperty(this, "onDialogConfirm", event => {
        this.setState({
          requestUserConfirmation: false,
          dismissNotification: true
        });
        console.log("User wants to dismiss notification");
      });
    }

    render() {
      const dialog = this.state.requestUserConfirmation ? React.createElement(Dialog, {
        buttonType: "text-with-icon",
        dialogType: "dual-action",
        dialogLayout: "wide",
        cancelIcon: "close",
        cancelText: "No",
        confirmIcon: "check",
        confirmText: "Yes",
        title: "Please confirm:",
        text: "Dismiss the notification ?",
        onCancel: this.onDialogCancel,
        onConfirm: this.onDialogConfirm
      }) : undefined;
      const notification = this.state.dismissNotification ? undefined : React.createElement(Text, {
        key: "notification",
        textSize: 0.035,
        text: "You have recieved message!",
        localPosition: [-0.175, 0.3, 0]
      });
      return React.createElement(View, null, notification, dialog);
    }

  }

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

  class DropDownListItemComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.6, 0.3, 0],
        textSize: 0.04
      }, "DropDownListItem Component is being tested in DropDownList scene"));
    }

  }

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

  class LightComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Light Component"));
    }

  }

  class LineComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Line Component"));
    }

  }

  class LinearLayoutComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a LinearLayout Component"));
    }

  }

  class ListViewComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a ListView Component"));
    }

  }

  class ListViewItemComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a ListViewItem Component"));
    }

  }

  class ModelComp extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        counter: 0,
        animation: {
          name: 'idle'
        },
        toggleState: false,
        animationPauseState: false,
        animationPlaybackSpeed: 1
      });

      _defineProperty(this, "animations", ['idle', 'walking', 'spotted']);

      _defineProperty(this, "onButtonClick", event => {
        const counter = this.state.counter < 2 ? this.state.counter + 1 : 0;
        this.setState(state => {
          return {
            counter: counter,
            animation: {
              name: this.animations[counter]
            }
          };
        });
      });

      _defineProperty(this, "onSliderChanged", event => {
        print("This is slider value " + event.Value);
        this.setState(state => ({
          animationPlaybackSpeed: event.Value
        }));
      });

      _defineProperty(this, "onToggleChanged", event => {
        this.setState(state => {
          return {
            animationPauseState: !state.animationPauseState,
            toggleState: !state.toggleState
          };
        });
      });
    }

    render() {
      print("This is slider value in render " + this.state.animationPlaybackSpeed);
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.4, 0],
        textSize: 0.04
      }, "This is a Model Component"), React.createElement(Model, {
        localPosition: [0, 0.1, 0],
        localScale: [0.0075, 0.0075, 0.0075],
        modelPath: 'res/turkey4.fbx',
        materialPath: 'res/turkey.kmat',
        texturePaths: ['res/turkey_baseColor.png'],
        defaultTextureIndex: 0,
        defaultTextureSlot: 'albedo',
        defaultMaterialName: 'turkey_material',
        importScale: 1.0,
        animationPlaybackSpeed: this.state.animationPlaybackSpeed,
        animation: this.state.animation,
        animationPauseState: this.state.animationPauseState
      }), React.createElement(Slider, {
        localPosition: [0, -0.2, 0],
        onSliderChanged: this.onSliderChanged,
        width: 0.3,
        min: 0,
        max: 2
      }), React.createElement(Button, {
        localPosition: [0.4, -0.2, 0],
        onClick: this.onButtonClick,
        textSize: 0.03,
        width: 0.3,
        height: 0.1,
        roundness: 0.7
      }, "Change Animation"), React.createElement(Toggle, {
        localPosition: [-0.3, -0.2, 0],
        onClick: this.onToggleChanged,
        on: this.state.toggleState
      }, "start/stop"));
    }

  }

  class PageViewComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a PageView Component"));
    }

  }

  class PanelComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Panel Component"));
    }

  }

  class PortalIconComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a PortalIcon Component"));
    }

  }

  class ProgressBarComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a ProgressBar Component"));
    }

  }

  class QuadComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Quad Component"));
    }

  }

  class RectLayoutComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a rectLayout Component"));
    }

  }

  class ScrollBarComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a ScrollBar Component"));
    }

  }

  class ScrollViewComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a ScrollView Component"), React.createElement(ScrollView, {
        localPosition: [-0.1, 0, 1],
        scrollDirection: "vertical",
        scrollBarVisibility: "auto"
      }, React.createElement(ScrollBar, {
        height: 0.05,
        width: 0.1,
        thumbSize: 0.03,
        orientation: "vertical"
      }), React.createElement(Text, {
        localPosition: [0, 0.1, 0],
        textSize: 0.03
      }, "Item 1"), React.createElement(Text, {
        localPosition: [0, 0.2, 0],
        textSize: 0.03
      }, "Item 2"), React.createElement(Text, {
        localPosition: [0, 0.3, 0],
        textSize: 0.03
      }, "Item 3"), React.createElement(Text, {
        localPosition: [0, 0.4, 0],
        textSize: 0.03
      }, "Item 4")));
    }

  }

  class SliderComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Slider Component"));
    }

  }

  class SpinnerComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Spinner Component"));
    }

  }

  class TabComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Tab  Component"));
    }

  }

  class TextEditComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.9, 0.550, 0],
        textSize: 0.03
      }, "Center aligment"), React.createElement(TextEdit, {
        localPosition: [-0.9, 0.5, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.03,
        padding: [0.5, 0.3, 0.5, 0.3],
        textAlignment: "center",
        lineSpacing: 0.3,
        charSpacing: 0.02
      }), React.createElement(Text, {
        localPosition: [-0.9, 0.350, 0],
        textSize: 0.03
      }, "Right aligment"), React.createElement(TextEdit, {
        localPosition: [-0.9, 0.3, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.04,
        textColor: [0.732, 0.265, 0.469, 1],
        textAlignment: "right"
      }), React.createElement(Text, {
        localPosition: [-0.9, 0.150, 0],
        textSize: 0.03
      }, "Left aligment. Entery URL"), React.createElement(TextEdit, {
        localPosition: [-0.9, 0.1, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.05,
        textAlignment: "left",
        textEntry: "url"
      }), React.createElement(Text, {
        localPosition: [-0.9, -0.150, 0],
        textSize: 0.03
      }, "Entery Numeric"), React.createElement(TextEdit, {
        localPosition: [-0.9, -0.2, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.06,
        textEntry: "numeric"
      }), React.createElement(Text, {
        localPosition: [-0.9, -0.350, 0],
        textSize: 0.03
      }, "Entery None"), React.createElement(TextEdit, {
        localPosition: [-0.9, -0.4, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.07,
        textEntry: "none"
      }), React.createElement(Text, {
        localPosition: [-0.2, 0.550, 0],
        textSize: 0.03
      }, "ScrollBarVisibility Always"), React.createElement(TextEdit, {
        localPosition: [-0.2, 0.5, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.03,
        scrollBarVisibility: "always"
      }), React.createElement(Text, {
        localPosition: [-0.2, 0.350, 0],
        textSize: 0.03
      }, "ScrollBarVisibility Auto + Multiline"), React.createElement(TextEdit, {
        localPosition: [-0.2, 0.3, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.04,
        scrollBarVisibility: "auto",
        multiline: true,
        scrolling: true,
        cursorEdgeScrollMode: "auto",
        scrollSpeed: 0.1,
        scrollValue: 0.2
      }), React.createElement(Text, {
        localPosition: [-0.2, 0.150, 0],
        textSize: 0.03
      }, "Password Mode on"), React.createElement(TextEdit, {
        localPosition: [-0.2, 0.1, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.05,
        password: true
      }), React.createElement(Text, {
        localPosition: [0.4, 0.550, 0],
        textSize: 0.03
      }, "This is Text Edit component"), React.createElement(TextEdit, {
        localPosition: [0.4, 0.5, 0],
        text: "Edit Me",
        width: 0.4,
        height: 0.08,
        textSize: 0.03,
        style: "italic",
        weight: "bold",
        hint: "This is a hint.",
        hintColor: [0.732, 0.265, 0.469, 1]
      }));
    }

  }

  class TimePickerComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a TimePicker Component"));
    }

  }

  class ToggleGroupComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a ToggleGroup Component"));
    }

  }

  class VideoComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a Video Component"));
    }

  }

  class ViewComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a View Component"));
    }

  }

  class WebViewComp extends React.Component {
    render() {
      return React.createElement(View, null, React.createElement(Text, {
        localPosition: [-0.2, 0.3, 0],
        textSize: 0.04
      }, "This is a WebView Component"));
    }

  }

  class App extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        index: 0
      });

      _defineProperty(this, "components", [{
        name: 'text',
        component: React.createElement(TextComp, null)
      }, {
        name: 'image',
        component: React.createElement(ImageComp, null)
      }, {
        name: 'button',
        component: React.createElement(ButtonComp, null)
      }, {
        name: 'audio',
        component: React.createElement(AudioComp, null)
      }, {
        name: 'circleConfirm',
        component: React.createElement(CircleConfirmationComp, null)
      }, {
        name: 'colorPicker',
        component: React.createElement(ColorPickerComp, null)
      }, {
        name: 'content',
        component: React.createElement(ContentComp, null)
      }, {
        name: 'datePicker',
        component: React.createElement(DatePickerComp, null)
      }, {
        name: 'dialog',
        component: React.createElement(DialogComp, null)
      }, {
        name: 'dropDownList',
        component: React.createElement(DropDownListComp, null)
      }, {
        name: 'dropDownListItem',
        component: React.createElement(DropDownListItemComp, null)
      }, {
        name: 'gridLayout',
        component: React.createElement(GridLayoutComp, null)
      }, {
        name: 'light',
        component: React.createElement(LightComp, null)
      }, {
        name: 'lineComp',
        component: React.createElement(LineComp, null)
      }, {
        name: 'linearLayout',
        component: React.createElement(LinearLayoutComp, null)
      }, {
        name: 'listView',
        component: React.createElement(ListViewComp, null)
      }, {
        name: 'listViewItem',
        component: React.createElement(ListViewItemComp, null)
      }, {
        name: 'model',
        component: React.createElement(ModelComp, null)
      }, {
        name: 'pageView',
        component: React.createElement(PageViewComp, null)
      }, {
        name: 'panel',
        component: React.createElement(PanelComp, null)
      }, {
        name: 'portalIcon',
        component: React.createElement(PortalIconComp, null)
      }, {
        name: 'progressBar',
        component: React.createElement(ProgressBarComp, null)
      }, {
        name: 'quad',
        component: React.createElement(QuadComp, null)
      }, {
        name: 'rectLayout',
        component: React.createElement(RectLayoutComp, null)
      }, {
        name: 'scrollBar',
        component: React.createElement(ScrollBarComp, null)
      }, {
        name: 'scrollView',
        component: React.createElement(ScrollViewComp, null)
      }, {
        name: 'slider',
        component: React.createElement(SliderComp, null)
      }, {
        name: 'spinner',
        component: React.createElement(SpinnerComp, null)
      }, {
        name: 'tab',
        component: React.createElement(TabComp, null)
      }, {
        name: 'textEdit',
        component: React.createElement(TextEditComp, null)
      }, {
        name: 'timePicker',
        component: React.createElement(TimePickerComp, null)
      }, {
        name: 'toggle',
        component: React.createElement(TimePickerComp, null)
      }, {
        name: 'toggleGroup',
        component: React.createElement(ToggleGroupComp, null)
      }, {
        name: 'video',
        component: React.createElement(VideoComp, null)
      }, {
        name: 'view',
        component: React.createElement(ViewComp, null)
      }, {
        name: 'webview',
        component: React.createElement(WebViewComp, null)
      }]);

      _defineProperty(this, "onPriviousClick", event => {
        print('onPriviousClick');
        this.setState(state => ({
          index: state.index > 0 ? state.index - 1 : 0
        }));
      });

      _defineProperty(this, "onNextClick", event => {
        print('onNextClick');
        const maxIndex = this.components.length - 1;
        this.setState(state => ({
          index: state.index < maxIndex - 1 ? state.index + 1 : maxIndex
        }));
      });
    }

    render() {
      const index = this.state.index;
      const previous = index > 0 ? this.components[index - 1] : {
        name: ''
      };
      const current = this.components[index];
      const next = index < this.components.length - 1 ? this.components[index + 1] : {
        name: ''
      };
      return React.createElement(View, {
        name: "main-view"
      }, React.createElement(Button, {
        localPosition: [-0.6, 0.8, 0],
        width: 0.3,
        height: 0.1,
        roundness: 0.5,
        onClick: this.onPriviousClick
      }, previous.name), React.createElement(Text, {
        localPosition: [-0.1, 0.7, 0],
        textSize: 0.1
      }, current.name), React.createElement(Button, {
        localPosition: [0.6, 0.8, 0],
        width: 0.3,
        height: 0.1,
        roundness: 0.5,
        onClick: this.onNextClick
      }, next.name), current.component);
    }

  }

  return App;

}(React));
