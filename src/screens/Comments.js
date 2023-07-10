import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Comments = () => {
  const [comments, setComments] = useState([
    { user: 'Usuario1', comment: 'Me encanto la pelicula' },
    { user: 'Usuario2', comment: 'La mejor pelicula que vi' },
    { user: 'Usuario3', comment: 'No me gusto tanto' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState('Usuario4');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const commentObj = { user: currentUser, comment: newComment };
      setComments([...comments, commentObj]);
      setNewComment('');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={styles.container}>
      <Text style={styles.title}>Comentarios</Text>
      
      <View style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.comment}>
            <Text style={styles.commentUser}>{comment.user}</Text>
            <Text style={styles.commentText}>{comment.comment}</Text>
          </View>
        ))}
      </View>

      <TextInput className='text-white'
        style={styles.input}
        placeholder="Deja un comentario..."
        placeholderTextColor="#fff" 
        value={newComment}
        onChangeText={text => setNewComment(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddComment}>
        <Text style={styles.buttonText}>Agregar Comentario</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(17 24 39)'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
   
  },
  commentsContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  comment: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  commentUser: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  commentText: {
    fontSize: 16,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    
  },
  button: {
    backgroundColor: '#FF3131',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Comments;
