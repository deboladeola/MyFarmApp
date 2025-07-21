import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyFarm App</Text>
      <Text style={styles.subtitle}>Choose your role to continue.</Text>

      <TouchableOpacity style={styles.roleButton} onPress={() => router.push('//dashboard/farmer')}>
       <Image source={require('../../assets/images/farmer.png')} style={styles.icon} />

        <Text style={styles.roleText}>I am a Farmer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roleButton} onPress={() => router.push('//dashboard/buyer')}>
        <Image source={require('../../assets/images/buyer.png')} style={styles.icon} />
        <Text style={styles.roleText}>I am a Buyer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roleButton} onPress={() => router.push('//dashboard/supplier')}>
       <Image source={require('../../assets/images/supplier.png')} style={styles.icon} />

        <Text style={styles.roleText}>I am a Supplier</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 16,
    color: '#333',
  },
  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 16,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
