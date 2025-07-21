import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import LogoutButton from '../../../components/logoutButton'; // 👈 import your reusable component

export default function BuyerDashboard() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🔓 Top-right logout icon using shared component */}
      <View style={styles.topRight}>
        <LogoutButton />
      </View>

      <Text style={styles.greeting}>👋 Hello, Buyer!</Text>
      <Text style={styles.subtitle}>Check out fresh produce and recent activity</Text>

      {/* 🛒 Orders */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛒 Your Orders</Text>
        <Text style={styles.sectionContent}>You have no active orders.</Text>
      </View>

      {/* 🌽 New Produce */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌽 New Produce Available</Text>
        <Text style={styles.sectionContent}>No new listings today. Check back soon!</Text>
      </View>

      {/* 💬 Messages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💬 Messages from Farmers</Text>
        <Text style={styles.sectionContent}>Check your latest chats.</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/dashboard/browse')}>
          <Text style={styles.buttonText}>🌿 Browse Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/messages')}>
          <Text style={styles.buttonText}>💬 View Messages</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f0f8ff',
    flexGrow: 1,
    position: 'relative',
  },
  topRight: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 10,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 4,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  sectionContent: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  buttonGroup: {
    marginTop: 10,
    gap: 12,
  },
  button: {
    backgroundColor: '#2F80ED',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
