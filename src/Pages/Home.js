import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';



export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Mateus</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor= "#555"
        value = {newSkill}
        onChangeText={value => setNewSkill(value)}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, {marginTop: 50}]}>
        My Skills
      </Text>
      
      {
        mySkills.map(skill => (
          <SkillCard skill={skill}/>
        ))
      }
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
})