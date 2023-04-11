import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import './global.css';
import styles from './App.module.css';

// author: {avatar_url: "", name: "", role: ""}
// published: Date
// content : String

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/yukimurajohn.png',
      name: "John Lennon",
      role: "Web Developer @ IN_JUNIOR"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    published: new Date('2023-04-10 16:04:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/diego3g.png',
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    published: new Date('2023-04-08 17:04:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />

          
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                published={post.published}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

