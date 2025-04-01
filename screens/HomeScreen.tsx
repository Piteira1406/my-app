import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import productcard from '../components/productcard';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600' }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.content}>
              <Text style={styles.title}>Oficina do Aço</Text>
              <Text style={styles.subtitle}>Arranja o teu chaço nos nossos parceiros</Text>
              
              <View style={styles.cardsContainer}>
                {['Explore', 'Featured', 'Popular'].map((item) => (
                  <TouchableOpacity key={item} style={styles.card}>
                    <Text style={styles.cardTitle}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              
              <View style={styles.featuredSection}>
                <Text style={styles.sectionTitle}>Oficinas para o teu chaço</Text>
                <View style={styles.featuredItems}>
                  {[1, 2, 3].map((item) => (
                    <TouchableOpacity key={item} style={styles.featuredItem}>
                      <Text style={styles.itemText}>Item {item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 20, 40, 0.7)',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 40,
  },
  cardsContainer: {
    marginBottom: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  featuredSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  featuredItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 16,
    width: '31%',
    alignItems: 'center',
  },
  itemText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
