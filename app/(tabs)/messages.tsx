import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { v4 as uuidv4 } from 'uuid';
import BackButton from '../../components/BackButton';

interface Message {
  id: string;
  from: string;
  to: string;
  text: string;
}

export default function MessagesScreen() {
  const { role } = useLocalSearchParams<{ role: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const getReceiversForRole = (senderRole: string): string[] => {
    switch (senderRole) {
      case 'farmer':
        return ['buyer', 'supplier'];
      case 'buyer':
        return ['farmer'];
      case 'supplier':
        return ['farmer'];
      default:
        return [];
    }
  };

  const handleSendMessage = () => {
    const receivers = getReceiversForRole(role);

    if (!inputText.trim()) return;

    const newMessages = receivers.map((receiver) => ({
      id: uuidv4(),
      from: role,
      to: receiver,
      text: inputText.trim(),
    }));

    setMessages((prev) => [...prev, ...newMessages]);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <BackButton />

      <Text style={styles.title}>💬 Messages ({role})</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageFrom}>From: {item.from} ➡️ To: {item.to}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No messages yet.</Text>}
        contentContainerStyle={{ flexGrow: 1 }}
      />

      <TextInput
        placeholder="Type a message..."
        placeholderTextColor="#999"
        value={inputText}
        onChangeText={setInputText}
        style={styles.input}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Send" onPress={handleSendMessage} color="#2F80ED" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2F80ED',
  },
  messageBubble: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  messageFrom: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginTop: 16,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  empty: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 16,
    marginTop: 32,
  },
  buttonWrapper: {
    marginTop: 12,
  },
});
