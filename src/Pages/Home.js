import React, { useState, useEffect } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';



export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('')
  }

  useEffect (() => {
    const currentHour = new Date().getHours();
    
    if(currentHour < 12){
      setGretting('Good Morning');
    } else if(currentHour < 18){
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Night');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Mateus</Text>

      <Text style={styles.greetings}>
        {gretting}
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor= "#555"
        value = {newSkill}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, {marginTop: 50}]}>
        MySkills
      </Text>


      <FlatList 
        data={mySkills}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item}/>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 8
  },
  greetings: {
    color: '#fff',
  }
})