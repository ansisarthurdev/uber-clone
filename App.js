import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

//redux
import { Provider } from 'react-redux';
import { store } from './app/store';

export default function App() {

  return ( 
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
        <Container>
          <Text>Lets build uber</Text>
        </Container>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )

}

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;
