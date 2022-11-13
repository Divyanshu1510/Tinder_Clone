import React from 'react'
import TinderCard from 'react-tinder-card'
import './card.css'

function Cards() {
  const [Animes, setAnimes] = React.useState([
    {
        name: 'Gojo Satoru',
        url: 'https://mangathrill.com/wp-content/uploads/2021/03/pjimage-26.jpg'
    },
    {
        name: 'Yor Forger',
        url:'https://leosigh.com/wp-content/uploads/2022/04/Yor-Forger-in-Spy-x-Family-anime-520x293.jpg',
    },    

    {
        name: 'Osamu Dazai',
        url: 'https://otakukart.com/wp-content/uploads/2022/03/Osamu-Dazai.jpg'
    },

    {
        name: 'Itachi Uchiha',
        url: 'https://12dimension.files.wordpress.com/2012/03/naruto578itachi_by_kushinastefy.jpeg'

        },
    {
        name: 'Kakashi Hatake',
        url: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/kakashi-face-closeup.jpg'
    },
 

    {
        name: 'Ino Yamanaka',
        url: 'http://pm1.narvii.com/7593/4f577c21c88cccdc09dcd37af3193ff4d801f1e3r1-452-464v2_uhq.jpg'
    },

    { 
        name: 'Minato Namikaze',
        url:'https://i.pinimg.com/originals/d4/e1/f9/d4e1f9cc59a71c42f38daf63cbcf361d.png'
    },

  
    {
        name: 'Son Gohan',
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b66fd4b0-4bc5-4530-990d-057c4f7cf741/dcqza2w-973167f5-63e2-4bd6-a82e-7bdd21776da3.png'
    }
  ]);
 

  return (
    <div className='container'>
        {
            Animes.map(Animes => (
                <TinderCard
                className='swipe'
                key={Animes.name}
                preventSwipe={['up', 'down']}


                >
                    <div 
                    style={{ backgroundImage: `url(${Animes.url})` }}
                    className="card">
                        <h2>{Animes.name}</h2>
                    </div>    
                </TinderCard>
            ))
    }
    </div>
  )
}

export default Cards