import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // for logout icon
import LogoutButton from '@/components/logoutButton'; // your reusable logout button

export default function SupplierDashboard() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🔓 Logout icon top-right */}
      <View style={styles.logoutContainer}>
        <LogoutButton />
      </View>

      <Text style={styles.greeting}>📦 Hello, Supplier!</Text>
      <Text style={styles.subtitle}>Manage your supplies and explore market needs</Text>

      {/* 📤 Add Supply */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📤 Add Supply</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/dashboard/add-supply')}
        >
          <Text style={styles.buttonText}>Add New Supply</Text>
        </TouchableOpacity>
      </View>

      {/* 🔍 Browse Needs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔍 Browse Produce Needs</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/dashboard/produce-requests')}
        >
          <Text style={styles.buttonText}>View Produce Requests</Text>
        </TouchableOpacity>
      </View>

      {/* 💬 Messages Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💬 Messages from Farmers</Text>
        <Text style={styles.sectionContent}>Check your latest conversations.</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/messages')}
        >
          <Text style={styles.buttonText}>View Messages</Text>
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
  },
  logoutContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 50,
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
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2F80ED',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
