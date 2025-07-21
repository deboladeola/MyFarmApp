import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import LogoutButton from '../../../components/logoutButton';

export default function FarmerHomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Top-right logout */}
      <View style={styles.logoutTopRight}>
        <LogoutButton />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>👋 Welcome back, Farmer!</Text>
        <Text style={styles.subtitle}>Manage your crops and activity</Text>

        {/* 📦 My Listings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📦 My Listings</Text>
          <Text style={styles.sectionContent}>You haven't added any crops this week.</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/mylistings')}>
            <Text style={styles.buttonText}>View Listings</Text>
          </TouchableOpacity>
        </View>

        {/* 📈 Farm Insights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📈 Farm Insights</Text>
          <Text style={styles.sectionContent}>You're trending in your region! 🌾</Text>
        </View>

        {/* ➕ Add Crop & Browse */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/add-crop')}>
            <Text style={styles.buttonText}>➕ Add New Crop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard/farmer-supply')}>
            <Text style={styles.buttonText}>🛒 Browse Supplies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/messages')}>
            <Text style={styles.buttonText}>💬 View Messages</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f0f8ff',
    flexGrow: 1,
  },
  logoutTopRight: {
    position: 'absolute',
    top: 50,
    right: 24,
    zIndex: 1,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
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
    marginBottom: 6,
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
