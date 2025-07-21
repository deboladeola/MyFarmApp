import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Crop {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export default function MyListingsScreen() {
  const [crops, setCrops] = useState<Crop[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'crops'));
        const data = querySnapshot.docs.map(
          doc => ({ id: doc.id, ...doc.data() } as Crop)
        );
        setCrops(data);
      } catch (error) {
        console.error('Error fetching crops:', error);
      }
    };

    fetchCrops();
  }, []);

  const renderItem = ({ item }: { item: Crop }) => (
    <View style={styles.card}>
      {item.imageUrl ? (
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={{ color: '#aaa' }}>No Image</Text>
        </View>
      )}
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>₦{item.price} • {item.quantity}kg</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 12 }}>
        <Ionicons name="arrow-back" size={26} color="#2F80ED" />
      </TouchableOpacity>

      <Text style={styles.heading}>📦 My Crop Listings</Text>

      <FlatList
        data={crops}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2F80ED',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  placeholder: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
});
