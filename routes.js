import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home        from './pages/Home';
import Selector    from './pages/Selector';
import List        from './pages/List';
import RaceDetail  from './pages/RaceDetail';
import DriverDetail from './pages/DriverDetail';


const Routes = createAppContainer(createSwitchNavigator({Home,Selector,List,RaceDetail,DriverDetail}));

export default Routes;