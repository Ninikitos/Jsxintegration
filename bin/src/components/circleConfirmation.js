import React from '../../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { View, Text, CircleConfirmation, Dialog } from '../../node_modules/magic-script-components/src/components.js';

class CircleConfirmationComp extends React.Component {
  constructor(...args) {
    super(...args);

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
        return {};
      });
    });

    _defineProperty(this, "onDialogCancel", event => {
      print("onDialogCancel");
    });

    _defineProperty(this, "onDialogConfirm", event => {
      print("onDialogConfirm");
    });
  }

  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.32, 0.3, 0],
      textSize: 0.04
    }, "This is a circleConfirmation Component"), React.createElement(CircleConfirmation, {
      onConfirmationCanceled: this.onConfirmationCanceled,
      onConfirmationComplete: this.onConfirmationComplete,
      onConfirmationUpdate: this.onConfirmationUpdate,
      height: 0.2
    }), React.createElement(Dialog, {
      buttonType: "text-with-icon",
      dialogType: "dual-action",
      dialogLayout: "wide",
      cancelIcon: "thumbs-up",
      cancelText: "Cancel",
      confirmIcon: "check",
      confirmText: "Confirm",
      title: "This is title",
      text: "This is text",
      onCancel: this.onDialogCancel,
      onConfirm: this.onDialogConfirm
    }));
  }

}

export default CircleConfirmationComp;
