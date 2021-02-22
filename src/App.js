import React from 'react'
import {API_KEY} from  './youtube-details/youtube-utils/youtube-utils'
import HomepageComponent from './pages/homepage/homepage-component';



class App extends React.Component
{
  constructor()
  {
    super();

  }

  componentDidMount()
  {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=GoogleDevelopers&key=${API_KEY} HTTP/1.1`
    fetch(url)
    .then(res => res.json())
      
      
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