import { Admin, CustomRoutes, Resource } from 'react-admin';
import { MicrolabLayout } from './presentation/Layout';
import { Route } from 'react-router';
import NotFound from './presentation/pages/Messages/NotFound';
import { DashBoard } from './presentation/pages/DashBoard/DashBoard';
import { SampleReports } from './presentation/pages/Reports/SampleReports';
import { mkLabLightTheme } from './AppTheme';


const App = () => (
    <Admin layout={MicrolabLayout}
        theme={mkLabLightTheme}
    >
    <CustomRoutes>
        <Route
            path='/'
            element={(
                <DashBoard />
            )}
        />
      <Route
        path='/reports'
        element={(
            <SampleReports />
        )}
      />
      <Route path='*' element={<NotFound />} />
    </CustomRoutes>
        <Resource name='' />
    </Admin>
);

export default App;