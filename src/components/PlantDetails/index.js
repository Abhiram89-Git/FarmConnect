import { useParams, Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import './index.css'

const plantlist = [
  {
    id: 1,
    name: 'Fertilizers',
    description: 'Fertilizers enhance soil fertility and boost plant growth.',
    imageUrl: 'https://images.unsplash.com/photo-1602526432608-029a709e6a33?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/jJSUN-r3ZXo',  // What Are Fertilisers?
  },
  {
    id: 2,
    name: 'Pesticides',
    description: 'Pesticides help protect plants from pests and insects.',
    imageUrl: 'https://images.unsplash.com/photo-1584680226833-0f5c7c386d40?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/Q5aI4-3gxUc',  // Ask a Farmer: Why do Farmers use Pesticides?
  },
  {
    id: 3,
    name: 'Seeds',
    description: 'Seeds are the foundation of agriculture and crop production.',
    imageUrl: 'https://images.unsplash.com/photo-1611075383723-6e8baf070b64?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/NlS_dTDsHHQ',  // New Vegetable Garden: How To Get Started
  },
  {
    id: 4,
    name: 'Herbs',
    description: 'Herbs are used for culinary, medicinal, and aromatic purposes.',
    imageUrl: 'https://images.unsplash.com/photo-1615484477622-0d7dfe15bb40?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/gUeFs5JD9_w',  // AGNIASTRA Preparation Method (natural pesticide)
  },
  {
    id: 5,
    name: 'Vegetables',
    description: 'Vegetables are essential for a balanced and healthy diet.',
    imageUrl: 'https://images.unsplash.com/photo-1604335399105-0e34d7ef8c04?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/w3BvAz30UzM',  // 7 Must-Have Gardening Tools
  },
  {
    id: 6,
    name: 'Fruits',
    description: 'Fruits provide vitamins, minerals, and natural sweetness.',
    imageUrl: 'https://images.unsplash.com/photo-1574226516831-e1dff420e12e?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/41YWrhEcQRg',  // How to make organic liquid fertilizer
  },
  {
    id: 7,
    name: 'Saplings',
    description: 'Saplings are young plants ready to be transplanted to fields.',
    imageUrl: 'https://images.unsplash.com/photo-1598857141343-c1d7be2300d4?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/UrNJCBwhrf0',  // This Farm Keeps Every Drop of Rain & NEVER Uses Fertilizer
  },
  {
    id: 8,
    name: 'Gardening Tools',
    description: 'Gardening tools make cultivation and maintenance easier.',
    imageUrl: 'https://images.unsplash.com/photo-1589988277987-14e4f0a29e02?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/vMQiVsZL83M',  // 30 MUST-HAVE Tools For Small Regenerative Farms
  },
];


function PlantDetails() {
  const { id } = useParams()
  const plant = plantlist.find(each => each.id === parseInt(id))

  if (!plant) {
    return <h2 className='no-results'>Plant not found</h2>
  }

  return (
    <div className='plant'>
      {/* Header same as Plants page */}
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
          <input type='search' placeholder='Search Plants...' className='search-input' />
          <BiSearch className='search-icon' />
        </div>
      </header>

      {/* Plant Details Section */}
      <div className='plant-details'>
        <div className='plantsdetails'>
          <h1 className='plant-name'>{plant.name}</h1>
          <img src={plant.imageUrl} alt={plant.name} className='plant-image' />
          <p className='description'>{plant.description}</p>
          <Link to='/plants'>
            <button className='back-button'>← Back to Plants</button>
          </Link>
        </div>

        <div className='video-container'>
          <iframe
            width='560'
            height='315'
            src={plant.videoUrl}
            title={plant.name}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer same as Plants page */}
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

export default PlantDetails
