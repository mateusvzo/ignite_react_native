import React, { useState, useEffect } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView,
  Platform, 
  TextInput,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setMySkills(oldState => [...oldState, data]);
    setNewSkill('')
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
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

      <Button 
        onPress={handleAddNewSkill}
        title="Add"
      />

      <Text style={[styles.title, {marginTop: 50}]}>
        MySkills
      </Text>


      <FlatList 
        data={mySkills}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
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