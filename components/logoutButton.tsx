// components/LogoutButton.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { Feather } from '@expo/vector-icons'; // make sure expo vector-icons is available

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/auth/login');
    } catch (error) {
      Alert.alert('Logout Error', 'Failed to sign out.');
    }
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.iconButton}>
      <Feather name="log-out" size={24} color="#2F80ED" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    position: 'absolute',
    top: 50,
    right: 24,
    zIndex: 1,
  },
});
