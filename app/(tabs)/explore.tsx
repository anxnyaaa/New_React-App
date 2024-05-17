import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/2.explore.jpg')}
          style={styles.reactLogo}
        />
      }>
      {/* headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />} */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
        <HelloWave emoji={'😼'}/>
      </ThemedView>
      <ThemedText style={{textAlign: 'center'}}>This section guides you how you can be a part of the <ThemedText type="defaultSemiBold">MeowVerse</ThemedText>, meowfully.</ThemedText>
      <Collapsible title="Step 1">
        <ThemedText>
          Take the first step to be meowzoned.
        </ThemedText>        
        <ExternalLink href="https://icanhas.cheezburger.com/lolcats">
          <View style={styles.buttonName}>
          <ThemedText type="link">Dig deep!</ThemedText>
          </View>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Step 2">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Step 3">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 250,
    width: 420,
    top: 0,
    // bottom: 0,
    // left: 0,
    position: 'absolute',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  buttonName: {
    padding: 500, 
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
  }
});
