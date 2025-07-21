import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackButton from '../../../components/BackButton'; // ✅ Import back button

const requests = [
  {
    id: '1',
    crop: 'Maize Seeds',
    quantity: '5 bags',
    farmer: 'Farmer Bisi',
  },
  {
    id: '2',
    crop: 'Tomato Seeds',
    quantity: '2 sacks',
    farmer: 'Farmer Kola',
  },
];

export default function ProduceRequestsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackButton /> {/* ✅ Add back button here */}

      <Text style={styles.heading}>📥 Produce Requests</Text>
      <Text style={styles.subheading}>See what farmers are currently requesting</Text>

      {requests.map((req) => (
        <View key={req.id} style={styles.card}>
          <Text style={styles.crop}>{req.crop}</Text>
          <Text style={styles.detail}>Quantity: {req.quantity}</Text>
          <Text style={styles.detail}>Requested by: {req.farmer}</Text>
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
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  crop: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#444',
  },
});
