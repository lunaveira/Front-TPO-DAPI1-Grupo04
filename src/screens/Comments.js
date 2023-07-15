import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Comments = ({ route }) => {
  const { id_pelicula, user_email } = route.params;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    fetchUserId();
    fetchComments();
  }, []);

  const fetchUserId = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/usuarios/${user_email}`);
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.id_user.toString());
      } else {
        console.error('Error al obtener el ID del usuario:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/peliculas/${id_pelicula}/comentarios`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Error al obtener los comentarios:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== '') {
      const commentObj = { comentario: newComment, rating: rating, id_user: currentUser };
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/peliculas/${id_pelicula}/comentarios`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentObj),
        });
        if (response.ok) {
          setNewComment('');
          fetchComments();
        } else {
          console.error('Error al agregar el comentario:', response.status);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  const handleRatingPress = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>
      <Text style={styles.title}>Comentarios</Text>

      <View style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.comment}>
            <Text style={styles.commentUser}>{comment.usuario}</Text>
            <Text style={styles.commentText}>{comment.comentario}</Text>
          </View>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Deja un comentario..."
        placeholderTextColor="#fff"
        value={newComment}
        onChangeText={(text) => setNewComment(text)}
      />

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating:</Text>
        <View style={styles.ratingStars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              style={[styles.star, star <= rating ? styles.starFilled : null]}
              onPress={() => handleRatingPress(star)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddComment}>
        <Text style={styles.buttonText}>Agregar Comentario</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
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
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  ratingStars: {
    flexDirection: 'row',
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  starFilled: {
    backgroundColor: '#fff',
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
