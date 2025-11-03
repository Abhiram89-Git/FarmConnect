import { useParams, Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import './index.css';

const irrigationList = [
  {
    id: 1,
    name: 'Furrow Irrigation',
    description: 'Furrow irrigation involves creating small parallel channels along the field length to distribute water.',
    imageUrl: 'https://images.unsplash.com/photo-1581091215361-51f54d77d478?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/1aT8m1xK2yA',
  },
  {
    id: 2,
    name: 'Border Irrigation',
    description: 'Border irrigation distributes water over sloping fields using bordered strips.',
    imageUrl: 'https://images.unsplash.com/photo-1616532626118-477d206c78c6?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/3bZbXWjhJvA',
  },
  {
    id: 3,
    name: 'Basin Irrigation',
    description: 'Basin irrigation is commonly used for fruit trees where water is applied to basins around the tree.',
    imageUrl: 'https://images.unsplash.com/photo-1581090706460-7c8f04ee2f0a?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/oVQbK5qUKuY',
  },
  {
    id: 4,
    name: 'Center Pivot Sprinkler',
    description: 'Center pivot sprinkler irrigation types rotate around a pivot to irrigate crops uniformly.',
    imageUrl: 'https://images.unsplash.com/photo-1579252469682-9e882ba8c0d3?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/X3r3W8Hl2pM',
  },
  {
    id: 5,
    name: 'Portable Sprinklers',
    description: 'Drip irrigation delivers water directly to the root zone through emitters, saving water and nutrients.',
    imageUrl: 'https://images.unsplash.com/photo-1579651278448-5a95fcf9b173?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/aZb6E5Ayyhg',
  },
  {
    id: 6,
    name: 'Drip Irrigation',
    description: 'Drip irrigation delivers water directly to the root zone through emitters, saving water and nutrients.',
    imageUrl: 'https://images.unsplash.com/photo-1579651278448-5a95fcf9b173?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/aZb6E5Ayyhg',
  },
  {
    id: 7,
    name: 'Manual Irrigation',
    description: 'Manual irrigation delivers water directly to the root zone through emitters, saving water and nutrients.',
    imageUrl: 'https://images.unsplash.com/photo-1579651278448-5a95fcf9b173?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/aZb6E5Ayyhg',
  },
  {
    id: 8,
    name: 'Smart Sensor Irrigation',
    description: 'Smart sensor irrigation delivers water directly to the root zone through emitters, saving water and nutrients.',
    imageUrl: 'https://images.unsplash.com/photo-1579651278448-5a95fcf9b173?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/aZb6E5Ayyhg',
  }
];

function IrrigationDetails() {
  const { id } = useParams();
  const irrigation = irrigationList.find(each => each.id === parseInt(id));

  if (!irrigation) {
    return <h2 className="no-results">Irrigation type not found</h2>;
  }

  return (
    <div className="irrigation-page">
      {/* Header */}
      <header className="header">
        <div className="img-logo">
            <img 
              src="https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421" 
              className="logo" 
              alt="FarmConnect"
            />
            <h1 className="heading">Farm<span className='connect'>Connect</span></h1>
          </div>
        <div className="search-bar">
          <input type="search" placeholder="Search Irrigation..." className="search-input" />
          <BiSearch className="search-icon" />
        </div>
      </header>

      {/* Irrigation details */}
      <div className="irrigation-details">
        <div className="irridetails">
          <h1 className="irrigation-name">{irrigation.name}</h1>
          <img src={irrigation.imageUrl} alt={irrigation.name} className="irrigation-image" />
          <p className="description">{irrigation.description}</p>
          <Link to="/irrigation">
            <button className="back-button">← Back to Irrigation</button>
          </Link>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={irrigation.videoUrl}
            title={irrigation.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Link to="/"><button>Home</button></Link>
        <Link to="/animals"><button>Animals</button></Link>
        <Link to="/plants"><button>Plants</button></Link>
        <Link to="/tools"><button>Tools</button></Link>
        <Link to="/irrigation"><button>Irrigation</button></Link>
        <Link to='/crops'><button>Crops</button></Link>
      </footer>
    </div>
  );
}

export default IrrigationDetails;
