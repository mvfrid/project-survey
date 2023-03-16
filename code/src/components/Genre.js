import React from 'react';

const Genre = ({ genre, setGenre, step }) => {
  console.log('NOW RUNNING GENRE.js')
  // console.log('{ genre, setGenre, step };', { genre, setGenre, step })
  return (
    <div className="container genre">
      <h2>Question {step}</h2>
      <h4>Any genre preferences?</h4>
      <form className="form type">
        <p>Current state: {genre}</p>
        <select
          onChange={(event) => setGenre(event.target.value)}
          value={genre}>
          <option value="" disabled>Select type:</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Mystery">Mystery</option>
          <option value="Crime">Crime</option>
          <option value="Adventure">Adventure</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
      </form>
    </div>
  );
};

export default Genre;
