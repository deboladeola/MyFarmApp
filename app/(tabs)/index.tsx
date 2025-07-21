import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

type ValidRoute = '/dashboard/farmer' | '/dashboard/buyer' | '/dashboard/supplier';

export default function HomeScreen() {
  const router = useRouter();

  const handleNavigation = (route: ValidRoute) => {
    try {
      router.push(route);
    } catch (error) {
      Alert.alert('Error', 'Failed to navigate. Please try again.');
      console.error('Navigation error:', error);
    }
  };

  const roles: {
    id: string;
    label: string;
    icon: any;
    route: ValidRoute;
  }[] = [
    {
      id: 'farmer',
      label: 'I am a Farmer',
      icon: require('@/assets/images/farmer.png'),
      route: '/dashboard/farmer',
    },
    {
      id: 'buyer',
      label: 'I am a Buyer',
      icon: require('@/assets/images/buyer.png'),
      route: '/dashboard/buyer',
    },
    {
      id: 'supplier',
      label: 'I am a Supplier',
      icon: require('@/assets/images/supplier.png'),
      route: '/dashboard/supplier',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyFarm App</Text>
      <Text style={styles.subtitle}>Choose your role to continue.</Text>

      {roles.map((role) => (
        <TouchableOpacity
          key={role.id}
          style={styles.roleButton}
          onPress={() => handleNavigation(role.route)}
        >
          <Image
            source={role.icon}
            style={styles.icon}
            accessibilityLabel={`${role.id} icon`}
          />
          <Text style={styles.roleText}>{role.label}</Text>
        </TouchableOpacity>
      ))}
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
    color: '#2F80ED',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    color: '#828282',
  },
  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});
