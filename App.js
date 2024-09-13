import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);  

  const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the capital of Spain?', answer: 'Madrid' },
    { question: 'What is the capital of Germany?', answer: 'Berlin' },
  ];

  const toggleAnswer = () => {
    setShowAnswer((ShowAnswer) => !ShowAnswer);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Button title="Prev" onPress={showPrev} />
        <TouchableOpacity style={styles.cards} onPress={toggleAnswer}>
          <Text style={styles.questionText}>{flashcards[currentIndex].question}</Text>
          {showAnswer && <Text style={styles.answerText}>{flashcards[currentIndex].answer}</Text>}
        </TouchableOpacity>
        <Button title="Next" onPress={showNext} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  cards: {
    flex: 1,
    backgroundColor: '#aed6f1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 16,
    color: 'darkblue',
    marginTop: 10,
  }
});
