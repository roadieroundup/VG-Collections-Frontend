import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';
import { AppTheme } from './theme';

export const VGCApp = () => {
    
    return (
        <Provider store={store}>
            <BrowserRouter basename='VG-Collections-Frontend' >
                <AppTheme>
                    <AppRouter />
                </AppTheme>
            </BrowserRouter>
        </Provider>
    );
};
