import { Provider } from 'react-redux';
import { store } from 'redux/store';
import PhoneBook from './components/PhoneBook';

export function App() {
  return (
    <Provider store={store}>
      <PhoneBook />
    </Provider>
  );
}
