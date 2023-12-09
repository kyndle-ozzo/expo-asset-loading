import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/smash.jpg")} style={{width: 200, height: 200}}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const fixAssetLoading = () => {
    // if (IF_ENV_WITH_UPDATES_ENABLED) {
    //     setCustomSourceTransformer((resolver) => {
    //         try {
    //             // If Bundler is using the hashAssetFiles plugin if and only if the fileHashes property exists
    //             if (resolver.asset.fileHashes) {
    //                 const asset = Asset.fromMetadata(resolver.asset);
    //                 return resolver.fromSource(asset.downloaded ? asset.localUri : asset.uri);
    //             } else {
    //                 return resolver.defaultAsset();
    //             }
    //         } catch {
    //             return resolver.defaultAsset();
    //         }
    //     });
    // }
}

fixAssetLoading();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
