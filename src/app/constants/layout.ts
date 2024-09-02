import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from './tokens';
import { defaultStyles } from '../styles';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
	color:colors.text,
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
};
