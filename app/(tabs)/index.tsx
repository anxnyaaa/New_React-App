import React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/1.bruh.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meowwwwwwww!</ThemedText>
        <HelloWave emoji={'😹'}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Are you ready?</ThemedText>
        <ThemedText>
          Get ready to be <ThemedText type="defaultSemiBold">Meowzoned!</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the <ThemedText type="defaultSemiBold">Explore</ThemedText> button to learn more about what's needed to be meowzoned.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Dive deeeeeep</ThemedText>
        <ThemedText>
          When you're ready, run <ThemedText type="defaultSemiBold">Chipi Chipi Chapa Chapa</ThemedText> and dive deep into the <ThemedText type="defaultSemiBold">Meowverse</ThemedText>.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <View style={styles.fullWidthButton}>
          <Button
            title="Explore"
            color='green'
            onPress={() => router.push('/explore')}
          />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  fullWidthButton: {
    width: '100%',
    color: 'red'
  },
  reactLogo: {
    height: 250,
    width: 420,
    top: 0,
    position: 'absolute',
  },
});
