import 'react-native';
import {it, describe, jest} from '@jest/globals';
import App from '../App';
import renderer from 'react-test-renderer';

jest.mock('react-native-geolocation-service', () => {
  return {
    getCurrentPosition: jest.fn().mockImplementationOnce(() => {
      Promise.resolve();
    }),
  };
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    fetch: jest.fn().mockImplementationOnce(() => {
      Promise.resolve();
    }),
  };
});
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(),
  };
});

describe('App', () => {
  it('renders correctly', () => {
    renderer.create(typeof App);
  });
});
