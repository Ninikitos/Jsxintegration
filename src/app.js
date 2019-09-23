import React from 'react';
import { View, Button, Text } from 'magic-script-components';
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
import TimePickerComp from './components/timePicker.js';
import ToggleComp from './components/timePicker.js';
import ToggleGroupComp from './components/toggleGroup.js';
import VideoComp from './components/video.js';
import ViewComp from './components/view.js';
import WebViewComp from './components/webview.js';



export default class App extends React.Component {
  state = {
     index: 0
  };

  components = [
    { name: 'text', component:(<TextComp/>) },
    { name: 'image', component:(<ImageComp/>) },
    { name: 'button', component:(<ButtonComp/>) },
    { name: 'audio', component:(<AudioComp/>) },
    { name: 'circleConfirm', component:(<CircleConfirmationComp/>) },
    { name: 'colorPicker', component:(<ColorPickerComp/>) },
    { name: 'content', component:(<ContentComp/>) },
    { name: 'datePicker', component:(<DatePickerComp/>) }, 
    { name: 'dialog', component:(<DialogComp/>) }, 
    { name: 'dropDownList', component:(<DropDownListComp/>) },
    { name: 'dropDownListItem', component:(<DropDownListItemComp/>) }, 
    { name: 'gridLayout', component:(<GridLayoutComp/>) }, 
    { name: 'light', component:(<LightComp/>) }, 
    { name: 'lineComp', component:(<LineComp/>) }, 
    { name: 'linearLayout', component:(<LinearLayoutComp/>) },
    { name: 'listView', component:(<ListViewComp/>) },
    { name: 'listViewItem', component:(<ListViewItemComp/>) },
    { name: 'model', component:(<ModelComp/>) },
    { name: 'pageView', component:(<PageViewComp/>) },
    { name: 'panel', component:(<PanelComp/>) },
    { name: 'portalIcon', component:(<PortalIconComp/>) },
    { name: 'progressBar', component:(<ProgressBarComp/>) }, 
    { name: 'quad', component:(<QuadComp/>) },
    { name: 'rectLayout', component:(<RectLayoutComp/>) },
    { name: 'scrollBar', component:(<ScrollBarComp/>) },
    { name: 'scrollView', component:(<ScrollViewComp/>) },
    { name: 'slider', component:(<SliderComp/>) },
    { name: 'spinner', component:(<SpinnerComp/>) },
    { name: 'tab', component:(<TabComp/>) },
    { name: 'textEdit', component:(<TextEditComp/>) },
    { name: 'timePicker', component:(<TimePickerComp/>) },
    { name: 'toggle', component:(<ToggleComp/>) },
    { name: 'toggleGroup', component:(<ToggleGroupComp/>) },
    { name: 'video', component:(<VideoComp/>) },
    { name: 'view', component:(<ViewComp/>) },
    { name: 'webview', component:(<WebViewComp/>) },

  ];

  onPriviousClick = (event) => {
    print('onPriviousClick');
    this.setState(state => ({ 
      index: state.index > 0 ? state.index - 1 : 0
    }));
  }
  
  onNextClick = (event) => {
    print('onNextClick');
    const maxIndex = this.components.length - 1;
    this.setState(state => ({ 
      index: state.index < maxIndex - 1 ? state.index + 1 : maxIndex
    }));
  }

  render () {
    const index = this.state.index;
    const previous = index > 0 ? this.components[index - 1] : {name: ''};
    const current = this.components[index];
    const next = index < this.components.length - 1 ? this.components[index + 1] : {name: ''};

    return (
      <View name='main-view'>
        <Button localPosition={[-0.6, 0.8, 0]} width={0.3} height={0.1} roundness={0.5} onClick={this.onPriviousClick}>{previous.name}</Button>
        <Text localPosition={[-0.1, 0.7, 0]} textSize={0.1}>{current.name}</Text>
        <Button localPosition={[0.6, 0.8, 0]} width={0.3} height={0.1} roundness={0.5} onClick={this.onNextClick}>{next.name}</Button>
        {current.component}
      </View>
    );
  }
}
