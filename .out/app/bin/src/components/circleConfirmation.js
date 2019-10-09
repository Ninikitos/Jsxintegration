import React from '../../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { Dialog, View, Text, CircleConfirmation } from '../../node_modules/magic-script-components/src/components.js';

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

export default CircleConfirmationComp;
