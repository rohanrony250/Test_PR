import React from 'react'

import HomepageComponent from './pages/homepage/homepage-component';



class App extends React.Component
{
  constructor()
  {
    super();

  }

  componentDidMount()
  {
    const url = 'https://www.googleapis.com/youtube/v3'
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