import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Ja<span class="className">mmm</span>ing</h1>
//       <div class="className">
//         <p>Add a SearchBar component </p>
//         <div class="className">
//           <p> Add a SearchResults component</p> 
//           <p>Add a Playlist component </p>
//         </div>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [{name:''}, {artist: ''}, {album: ''}, {id: ''}]}
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
         <p> Add a SearchBar component</p>
          <div className="App-playlist">
           <p> Add a SearchResults component </p>
            <p>Add a Playlist component </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
