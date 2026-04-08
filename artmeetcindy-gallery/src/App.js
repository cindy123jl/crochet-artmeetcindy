import CrochetGallery from './components/crochet-gallery';
import logo from './logo.svg';
import './App.css';

function App() {

  const galleryImages = [

    {img: 'artmeetcindy-gallery/public/logo512.png'},
  ]
  
  return (
    <div className="App">
      <strong>Crochet Gallery</strong>
      <CrochetGallery galleryImages={galleryImages} />
    </div>
  );
}

export default App;
