// components/BackButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleBack} style={styles.button} accessibilityLabel="Go back">
        <Text style={styles.text}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    color: '#2F80ED',
    fontSize: 16,
    fontWeight: '500',
  },
});
