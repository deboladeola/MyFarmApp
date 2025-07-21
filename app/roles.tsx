import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#a8edea', '#fed6e3']} style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../dashboard/farmer')}>
        <Image source={require('../assets/images/farmer.png')} style={styles.icon} />
        <Text style={styles.label}>Farmer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../dashboard/buyer')}>
        <Image source={require('../assets/images/buyer.png')} style={styles.icon} />
        <Text style={styles.label}>Buyer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../dashboard/supplier')}>
        <Image source={require('../assets/images/supplier.png')} style={styles.icon} />
        <Text style={styles.label}>Supplier</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    backgroundColor: '#ffffffcc',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
});
