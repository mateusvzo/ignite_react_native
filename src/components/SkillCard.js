import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity key={skill} style={[styles.buttonSkill, {marginTop: 20}]}>      
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})