import React from 'react'
import {API_KEY} from  './youtube-details/youtube-utils/youtube-utils'
import HomepageComponent from './pages/homepage/homepage-component';



class App extends React.Component
{
  constructor()
  {
    super();

  }

  async componentDidMount()
  {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=GoogleDevelopers&key=${API_KEY}`
    const fetchres = await fetch(url);
    const res = await fetchres.json();
    console.log(res); 
    
      
      
  }
  render()
  {
    return(
      <div>
        <HomepageComponent/>
      </div>
    )
  }
}

export default App;



// function App() {
//   return (
//     <div>
//       <HomepageComponent/>
//     </div>
//   );
// }