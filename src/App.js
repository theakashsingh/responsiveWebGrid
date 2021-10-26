import './App.css';
import queso from './images/queso-taco.png'

function App() {
  return (
    <>
        <div class="wrapper">
    <div class="top">
      <header class="hero">
        <h1>Terry's Taco Joint</h1>
        <p>Pretty Good Tacos!</p>
      </header>
      <div class="cta cta1">
        <p class="price">$1.99</p>
        <p>Tacos</p>
      </div>
      <div class="cta cta2">
        <p class="price">$3.99</p>
        <p>Kombucha</p>
      </div>

    </div>
    <nav class="menu">
      <button aria-expanded="false" aria-controls="menu-list">
        <span class="open">☰</span>
        <span class="close">×</span>
        Menu
      </button>
      <ul id="menu-list">
        <li>
          <a href="">Tacos</a>
        </li>
        <li>
          <a href="">Beers</a>
        </li>
        <li>
          <a href="">Wines</a>
        </li>
        <li>
          <a href="">Desserts</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
      </ul>
    </nav>

    <section class="features">
      <div class="feature">
        <span class="icon">🌮</span>
        <h3>Tacos</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
      </div>
      <div class="feature">
        <span class="icon">🍺</span>
        <h3>Beer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
      </div>
      <div class="feature">
        <span class="icon">🍷</span>
        <h3>Wine</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
      </div>
      <div class="feature">
        <span class="icon">🎵</span>
        <h3>Music</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
      </div>
    </section>

    <section class="about">
      <img src={queso} alt="Yummy Taco" class="about__mockup"/>
      <div class="about__details">
        <h2>Featured Taco</h2>
        <p>Slim Profile, easy to hold and loaded with cheese.</p>
        <p>This is the one you have been waiting for</p>
        <button>Learn More →</button>
      </div>
    </section>


    <section class="gallery">
      <h2>Instant Grams</h2>
      <img src="https://source.unsplash.com/random/201x201" alt=""/>
      <img src="https://source.unsplash.com/random/202x202" alt=""/>
      <img src="https://source.unsplash.com/random/203x203" alt=""/>
      <img src="https://source.unsplash.com/random/204x204" alt=""/>
      <img src="https://source.unsplash.com/random/205x205" alt=""/>
      <img src="https://source.unsplash.com/random/206x206" alt=""/>
      <img src="https://source.unsplash.com/random/207x207" alt=""/>
      <img src="https://source.unsplash.com/random/207x208" alt=""/>
      <img src="https://source.unsplash.com/random/207x209" alt=""/>
      <img src="https://source.unsplash.com/random/207x210" alt=""/>
    </section>
  </div>
    </>
  );
}

export default App;
