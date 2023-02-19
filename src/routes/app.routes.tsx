import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Dashboard, List } from '../pages';
import { Layout } from '../components';


const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/list/:type' exact component={List} />
            </Switch>
        </Layout>
    );
};

export default AppRoutes; 
