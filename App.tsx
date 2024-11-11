import React, { useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from 'app/styles/theme';
import Router from 'app/router';
import { SnackBar } from 'app/design-system';
import Notify from 'app/utils/Notify';
import { Provider } from 'react-redux';
import { store, persistor } from 'app/redux/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const snackBarRef = React.useRef<SnackBar>(null);

  useEffect(() => {
    const subscriptions = Notify.getNotify().subscribe(param => {
      snackBarRef.current?.show(param);
    });

    return () => subscriptions.unsubscribe?.();
  }, []);

  const queryClient = new QueryClient();

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <SafeAreaProvider>
          <QueryClientProvider client={ queryClient }>
            <ThemeProvider theme={ theme }>
              <GestureHandlerRootView style={ { flex:1 } }>
                <BottomSheetModalProvider>
                  <Router />
                  <SnackBar
                    ref={ snackBarRef }
                    onClose={ () => {
                      Notify.clearNotify();
                    } }
                  />
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
            </ThemeProvider>
          </QueryClientProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
