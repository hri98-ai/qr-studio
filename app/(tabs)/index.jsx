import React, { useState, useRef, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CreateScreen() {
  const [type, setType] = useState('url');
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>QR Studio</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Enter URL or text..."
            placeholderTextColor="#3a3a5a"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0d0d12' },
  scroll: { flex: 1 },
  header: { padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: '#fff' },
  inputBox: { padding: 16 },
  input: { backgroundColor: '#13131e', borderRadius: 12, padding: 14, color: '#e8e6ff', fontSize: 14, borderWidth: 1, borderColor: '#1e1e2e' },
});
