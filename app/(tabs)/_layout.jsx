import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#13131e', borderTopColor: '#1e1e2e', height: 64, paddingBottom: 8, paddingTop: 6 },
      tabBarActiveTintColor: '#7c78ff',
      tabBarInactiveTintColor: '#5a5a7a',
    }}>
      <Tabs.Screen name="index" options={{ title: 'Create', tabBarIcon: ({ color, size }) => <Ionicons name="qr-code-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="history" options={{ title: 'History', tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} /> }} />
    </Tabs>
  );
      }
