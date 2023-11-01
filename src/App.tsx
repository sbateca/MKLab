import { Admin, Resource } from 'react-admin';
import { MicrolabLayout } from './presentation/Layout';


const App = () => (
    <Admin layout={MicrolabLayout}>
        <Resource name='' />
    </Admin>
);

export default App;