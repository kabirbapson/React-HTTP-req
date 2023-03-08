import * as DeviceInfo from 'react-native-localize';
import uuid from 'react-native-uuid';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import store from '../store/store';
import {setResetLounge} from '../store/reducers/loungeSlice';
import {MediaClient} from '../app/lib/MediaClient';
import InCallManager from 'react-native-incall-manager';

export const getTimeZone = () => {
  return DeviceInfo.getTimeZone();
};

export const randomStr = (): string => {
  const randomStr = uuid.v4() as string;
  return randomStr.substring(0, 8);
};
export const hp = value => {
  const height = 0.13;
  return heightPercentageToDP(height * value);
};

export const wp = value => {
  const width = 0.28;
  return widthPercentageToDP(width * value);
};

export const timeConvert = (k: string, m: number) => {
  let hours = m / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);


  switch (k) {
    case 'm':
      return rminutes;
    case 'h':
      return rhours;
    default:
      return;
    
  }

  

};



export const leaveMeeting = () => {
  store.dispatch(setResetLounge());
  MediaClient.getInstance().close();
  InCallManager.setKeepScreenOn(false);
  InCallManager.stop();
};

export const capitalize = (sentance: any): string => {
  const capitalizeSentence = sentance
    .split(' ')
    .map(name => name.replace(name[0], name[0].toUpperCase()));
  return capitalizeSentence.toString().replaceAll(',', ' ');
};

