import React from '../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import { View, Button, Text } from '../node_modules/magic-script-components/src/components.js';
import TextComp from './components/text.js';
import ImageComp from './components/image.js';
import ButtonComp from './components/button.js';
import AudioComp from './components/audio.js';
import CircleConfirmationComp from './components/circleConfirmation.js';
import ColorPickerComp from './components/colorPicker.js';
import ContentComp from './components/content.js';
import DatePickerComp from './components/datePicker.js';
import DialogComp from './components/dialog.js';
import DropDownListComp from './components/dropDownList.js';
import DropDownListItemComp from './components/dropDownListItem.js';
import GridLayoutComp from './components/gridLayout.js';
import LightComp from './components/light.js';
import LineComp from './components/line.js';
import LinearLayoutComp from './components/linearLayout.js';
import ListViewComp from './components/listView.js';
import ListViewItemComp from './components/listViewItem.js';
import ModelComp from './components/model.js';
import PageViewComp from './components/pageView.js';
import PanelComp from './components/panel.js';
import PortalIconComp from './components/portalIcon.js';
import ProgressBarComp from './components/progressBar.js';
import QuadComp from './components/quad.js';
import RectLayoutComp from './components/rectLayout.js';
import ScrollBarComp from './components/scrollBar.js';
import ScrollViewComp from './components/scrollView.js';
import SliderComp from './components/slider.js';
import SpinnerComp from './components/spinner.js';
import TabComp from './components/tab.js';
import TextEditComp from './components/textEdit.js';
import ToggleComp from './components/timePicker.js';
import ToggleGroupComp from './components/toggleGroup.js';
import VideoComp from './components/video.js';
import ViewComp from './components/view.js';
import WebViewComp from './components/webview.js';

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
      component: React.createElement(ToggleComp, null)
    }, {
      name: 'toggle',
      component: React.createElement(ToggleComp, null)
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

export default App;
