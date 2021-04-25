import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import HomeView from './components/pages/HomeView';
import CounterView from './components/pages/CounterView';
import PracticeView from './components/pages/PracticeView';
import AppBar from './components/AppBar';

function App() {
   return (
      <>
         <AppBar />
         <Switch>
            <Route path={routes.practice} component={PracticeView} />
            <Route path={routes.counter} component={CounterView} />
            <Route path={routes.home} component={HomeView} />
         </Switch>
      </>
   );
}

export default App;
