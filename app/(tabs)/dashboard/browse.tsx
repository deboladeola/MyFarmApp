import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const products = [
  {
    id: '1',
    name: 'Tomatoes',
    image: require('@/assets/images/tomato.png'),
    description: 'Fresh ripe tomatoes harvested this week',
    price: '₦800 per basket',
  },
  {
    id: '2',
    name: 'Maize',
    image: require('@/assets/images/maize.png'),
    description: 'Organic maize available in bulk',
    price: '₦1,500 per sack',
  },
  {
    id: '3',
    name: 'Beans',
    image: require('@/assets/images/beans.png'),
    description: 'High-nutrient beans in stock',
    price: '₦2,300 per 10kg',
  },
];

export default function BrowseProductsScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>🛍️ Fresh Produce Available</Text>
      <Text style={styles.subheading}>Browse newly harvested crops from farmers</Text>

      {products.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.detail}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f0f8ff',
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    color: '#2F80ED',
    fontSize: 16,
    fontWeight: '500',
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
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#2F80ED',
    fontWeight: 'bold',
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
