import React from '../../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { Dialog, Text, View } from '../../node_modules/magic-script-components/src/components.js';

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

export default DialogComp;
