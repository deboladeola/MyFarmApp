import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../../components/BackButton';

export default function FarmerSupplyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackButton /> {/* ✅ Add BackButton at the top */}

      <Text style={styles.heading}>🛠️ Supplies from Trusted Suppliers</Text>
      <Text style={styles.subheading}>Browse tools, seeds, and fertilizers for your farm</Text>

      {/* 🧪 Fertilizer */}
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/fertilizer.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Organic Fertilizer</Text>
        <Text style={styles.detail}>₦7,500 per 25kg</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Now</Text>
        </TouchableOpacity>
      </View>

      {/* 🌽 Maize Seeds */}
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/maize.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Maize Seeds</Text>
        <Text style={styles.detail}>₦1,200 per 5kg</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Now</Text>
        </TouchableOpacity>
      </View>

      {/* 🍅 Tomato Seeds */}
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/tomato.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Tomato Seeds</Text>
        <Text style={styles.detail}>₦950 per 5kg</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F80ED',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 15,
    color: '#555',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2F80ED',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
