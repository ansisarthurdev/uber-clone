import { SafeAreaProvider } from 'react-native-safe-area-context';

//redux
import { Provider } from 'react-redux';
import { store } from './app/store';

//stacknavigator
import StackNavigator from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return ( 
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider style={{flex: 1}}>
        <StackNavigator />
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )

}
