import Header from "./components/Header";
import DashboardContainer from "./containers/DashboardContainer";
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <DashboardContainer />
    </div>
  </Provider>
  );
}

export default App;
