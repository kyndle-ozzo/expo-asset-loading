import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { setCustomSourceTransformer } from "react-native/Libraries/Image/resolveAssetSource";

const fixAssetLoading = () => {
  setCustomSourceTransformer((resolver) => {
    try {
      // If Bundler is using the hashAssetFiles plugin if and only if the fileHashes property exists
      if (resolver.asset.fileHashes) {
        console.log(JSON.stringify(resolver));
        // TODO: replace with custom logic
        return resolver.defaultAsset();
      }

      return resolver.defaultAsset();
    } catch {
      return resolver.defaultAsset();
    }
  });
};

fixAssetLoading();

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/smash.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
