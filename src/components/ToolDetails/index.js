import { useParams, Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import './index.css'

const toolslist = [
  {
    id: 1,
    name: 'Shovel',
    description: 'A shovel is used for digging soil, planting, and moving materials like sand or compost.',
    imageUrl: 'https://images.unsplash.com/photo-1592152567536-1237e839f264?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/0Sr6qzZ7kZI'
  },
  {
    id: 2,
    name: 'Hoe',
    description: 'A hoe helps to remove weeds and loosen the soil for planting crops.',
    imageUrl: 'https://images.unsplash.com/photo-1574780171501-1b64aa3e64b1?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/yOMlfm2wVUw'
  },
  {
    id: 3,
    name: 'Rake',
    description: 'A rake is used to gather leaves, hay, or soil evenly across the field.',
    imageUrl: 'https://images.unsplash.com/photo-1601880987242-8d58b0e61f43?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/d9LZQpZx7Fg'
  },
  {
    id: 4,
    name: 'Plough',
    description: 'A plough turns and loosens soil, preparing it for sowing seeds.',
    imageUrl: 'https://images.unsplash.com/photo-1582738411988-f9a77f8d9f97?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/aeK6Jt7vltY'
  },
  {
    id: 5,
    name: 'Sprayer',
    description: 'A sprayer is used to apply fertilizers and pesticides evenly on crops.',
    imageUrl: 'https://images.unsplash.com/photo-1628245200845-7d875d4cbb5f?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/AhSxkVZLo1M'
  },
  {
    id: 6,
    name: 'Watering Can',
    description: 'Used for watering plants manually in gardens and nurseries.',
    imageUrl: 'https://images.unsplash.com/photo-1615485390347-3f66c06bbd1c?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/PzR1YI4c5dU'
  },
  {
    id: 7,
    name: 'Wheelbarrow',
    description: 'A wheelbarrow helps transport soil, fertilizer, and crops easily.',
    imageUrl: 'https://images.unsplash.com/photo-1613748185008-12b8af87a0ed?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/KvYDFsDlyLk'
  },
  {
    id: 8,
    name: 'Sickle',
    description: 'A sickle is used to cut crops or grass manually with its curved blade.',
    imageUrl: 'https://images.unsplash.com/photo-1608647343039-32c4e9a2f08d?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/vzJSXzF9sfQ'
  }
]

function ToolDetails() {
  const { id } = useParams()
  const tool = toolslist.find(each => each.id === parseInt(id))

  if (!tool) {
    return <h2 className="no-results">Tool not found</h2>
  }

  return (
    <div className="tool-page">
      {/* Header same as other pages */}
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
          <input type="search" placeholder="Search Tools..." className="search-input" />
          <BiSearch className="search-icon" />
        </div>
      </header>

      {/* Tool details section */}
      <div className="tool-details">
        <div className="tooldetails">
          <h1 className="tool-name">{tool.name}</h1>
          <img src={tool.imageUrl} alt={tool.name} className="tool-image" />
          <p className="description">{tool.description}</p>
          <Link to="/tools">
            <button className="back-button">← Back to Tools</button>
          </Link>
        </div>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={tool.videoUrl}
            title={tool.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer same as other pages */}
      <footer className="footer">
        <Link to="/"><button>Home</button></Link>
        <Link to="/animals"><button>Animals</button></Link>
        <Link to="/plants"><button>Plants</button></Link>
        <Link to="/tools"><button>Tools</button></Link>
        <Link to="/irrigation"><button>Irrigation</button></Link>
        <Link to='/crops'><button>Crops</button></Link>
      </footer>
    </div>
  )
}

export default ToolDetails
