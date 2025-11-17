import { useParams, Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import './index.css'

const cropsList = [
  {
    id: 1,
    name: 'Rice',
    description: 'Rice is a staple food crop, grown in waterlogged fields called paddies.',
    imageUrl: 'https://images.unsplash.com/photo-1589927986089-35812389fcc6?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/kxAEiHCErSA',  // Remarkable Rice: how does rice grow :contentReference[oaicite:0]{index=0}
  },
  {
    id: 2,
    name: 'Cotton',
    description: 'Cotton is a fiber crop used in textile industries worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1580932174301-8d7c644c3a2f?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/eN-TqqBQOAk',  // Cotton farming guide :contentReference[oaicite:1]{index=1}
  },
  {
    id: 3,
    name: 'Chilli',
    description: 'Chilli is a spice crop used for adding heat and flavor in food.',
    imageUrl: 'https://images.unsplash.com/photo-1603676712518-1e2aee47d2c1?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/q4j0SQw5v4g',  // Chilli Farming – Complete Guide :contentReference[oaicite:2]{index=2}
  },
  {
    id: 4,
    name: 'Barley',
    description: 'Barley is a cereal grain used for food, livestock feed, and brewing.',
    imageUrl: 'https://images.unsplash.com/photo-1597368920057-fd0e193c93c7?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/75TYOGFL10w',  // Barley Farming: Cultivation Secrets :contentReference[oaicite:3]{index=3}
  },
  {
    id: 5,
    name: 'Millets',
    description: 'Millets are small-seeded grasses, rich in nutrients and easy to grow.',
    imageUrl: 'https://images.unsplash.com/photo-1597368920057-fd0e193c93c7?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/Xw-_IwC9s3g',  // (I couldn’t find a very good recent video specifically for millets)  
  },
  {
    id: 6,
    name: 'Soybean',
    description: 'Soybean is a legume crop used for oil extraction, animal feed, and protein-rich food.',
    imageUrl: 'https://images.unsplash.com/photo-1597368920057-fd0e193c93c7?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/LT1JxJkTce8',  // (I couldn’t reliably verify a working, relevant video for soybean)  
  },
  {
    id: 7,
    name: 'Maize',
    description: 'Maize is used as food for humans, fodder for animals, and raw material in industries.',
    imageUrl: 'https://images.unsplash.com/photo-1597368920057-fd0e193c93c7?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/fz3JwTU82uA',  // (Your previous maize video, if it works for you)  
  },
  {
    id: 8,
    name: 'Sugarcane',
    description: 'Sugarcane is cultivated for sugar production and bioenergy.',
    imageUrl: 'https://images.unsplash.com/photo-1597368920057-fd0e193c93c7?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/IZgoG0YN00s',  // Sugarcane farming from start to end :contentReference[oaicite:4]{index=4}
  }
];



function CropDetails() {
  const { id } = useParams()
  const crop = cropsList.find(each => each.id === parseInt(id))

  if (!crop) {
    return <h2 className='no-results'>Crop not found</h2>
  }

  return (
    <div className='crop-details'>
      <header className='header'>
        <div className="img-logo">
            <img 
              src="https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421" 
              className="logo" 
              alt="FarmConnect"
            />
            <h1 className="heading">Farm<span className='connect'>Connect</span></h1>
          </div>
        <div className='search-bar'>
          <input
            type='search'
            placeholder='Search Animals...'
            className='search-input'
          />
          <BiSearch className='search-icon' />
        </div>
      </header>

      <div className='crop-content'>
        <div className='cropdetails'>
          <h1 className='crop-name'>{crop.name}</h1>
          <img src={crop.imageUrl} alt={crop.name} className='crop-image' />
          <p className='description'>{crop.description}</p>
          <Link to='/crops'>
            <button className='back-button'>← Back to Crops</button>
          </Link>
        </div>

        <div className='video-container'>
          <iframe
            width='560'
            height='315'
            src={crop.videoUrl}
            title={crop.name}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <footer className='footer'>
        <Link to='/'><button>Home</button></Link>
        <Link to='/animals'><button>Animals</button></Link>
        <Link to='/plants'><button>Plants</button></Link>
        <Link to='/tools'><button>Tools</button></Link>
        <Link to='/irrigation'><button>Irrigation</button></Link>
        <Link to='/crops'><button>Crops</button></Link>
      </footer>
    </div>
  )
}

export default CropDetails
