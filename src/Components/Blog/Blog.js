import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Headers/Header';
import header from '../../Components/Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import TypeWriterEffect from 'react-typewriter-effect';


const Blog = () => {
    return (
        <div>
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(${header})`,
        }}
        class="background"
      >
        <Header />
        <div
          style={{ color: 'white', overflowX: 'hidden' }}
          className="align-self-center text-center mt-auto"
        >
          <h1 style={{ fontSize: '5rem', marginTop: '8rem' }}>
            Blogs...
          </h1>
        </div>
      </div>
      <TypeWriterEffect className ="align-self-center"
             textStyle={{
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
              textAlign:"center",
              marginTop:"1rem"
            }}
            startDelay={100}
            cursorColor="black"
            text= 
            "Blog is coming soon..."
            typeSpeed={100}
            loop={true}
          /> 

      
      

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Blog;