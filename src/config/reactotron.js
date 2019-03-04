import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let reactotron = null;

if (process.env.NODE_ENV === 'development') {
  reactotron = Reactotron.configure({
    name: 'Developers Map',
    environment: 'localhost:3000',
  })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  reactotron.clear();
  console.tron = reactotron;
}

export default reactotron;
