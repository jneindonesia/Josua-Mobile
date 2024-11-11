import React from 'react';
import { SafeAreaView } from 'react-native';
import { useStyles } from './Home.style';
import WebView from 'react-native-webview';
import { API_BASE_URL } from '@env';

const Home = () => {
  const { Styles } = useStyles();

  return (
    <SafeAreaView style={ Styles.container }>
      <WebView
        source={ {
          uri:  API_BASE_URL,
        } }
        style={ { flex: 1 } }
      />
    </SafeAreaView>
  );
};

export default Home;
