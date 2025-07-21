import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase/firebaseConfig';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import BackButton from '../../components/BackButton'; // ✅ Import the back button

export default function AddCropScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!name || !price || !quantity || !image) {
      Alert.alert('Missing Information', 'Please fill all fields and select an image.');
      return;
    }

    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const imageId = uuid.v4();
      const imageRef = ref(storage, `crops/${imageId}`);
      await uploadBytes(imageRef, blob);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'crops'), {
        name,
        price: parseFloat(price),
        quantity: parseFloat(quantity),
        imageUrl,
        createdAt: Timestamp.now(),
      });

      Alert.alert('Success', `${name} has been listed!`);
      setName('');
      setPrice('');
      setQuantity('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading crop:', error);
      Alert.alert('Error', 'Failed to submit crop. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <BackButton /> {/* ✅ Added back button */}
      <Text style={styles.title}>Add New Crop</Text>

      <TextInput
        placeholder="Crop Name (e.g. Tomatoes)"
        placeholderTextColor="#666"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Price (₦ per kg)"
        placeholderTextColor="#666"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Quantity (e.g. 50 kg)"
        placeholderTextColor="#666"
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imageText}>Pick an Image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Crop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#2F80ED',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  imagePicker: {
    backgroundColor: '#fff',
    height: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageText: {
    color: '#888',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2F80ED',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
