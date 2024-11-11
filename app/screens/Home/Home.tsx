import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useStyles } from './Home.style';
import WebView from 'react-native-webview';
import { API_BASE_URL } from '@env';
import { Loading, Text } from 'app/design-system';

const Home = () => {
  const { Styles } = useStyles();

  return (
    <SafeAreaView style={ Styles.container }>
      <WebView
        source={ {
          uri: API_BASE_URL,
        } }
        useWebkit
        javaScriptEnabledAndroid
        userAgent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36'
        originWhitelist={ ['*'] }
        javaScriptEnabled
        startInLoadingState={ true }
        style={ { flex: 1 } }
        renderLoading={ () => (
          <View style={ Styles.containerModal }>
            <Loading animating={ true } />
            <Text variant={ 'body3' } mt={ 'm' } textAlign='center'>
              Sedang memuat halaman...
            </Text>
          </View>
        ) }
      />
    </SafeAreaView>
  );
};

export default Home;
