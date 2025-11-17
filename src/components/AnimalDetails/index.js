import { useParams, Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import './index.css'

const animallist = [
  {
    id: 1,
    name: 'Cows',
    description: 'Cows provide milk and are vital in dairy farming.',
    imageUrl:
      'https://images.unsplash.com/photo-1620727483442-20b6450ca8c0?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/h7k6P12gfic',
  },
  {
    id: 2,
    name: 'Goats',
    description: 'Goats are hardy animals used for milk and meat production.',
    imageUrl:
      'https://images.unsplash.com/photo-1588466585717-f8041aec7875?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/gZdj6YOPUlE',
  },
  {
    id: 3,
    name: 'Sheep',
    description: 'Sheep are raised for their wool and meat.',
    imageUrl:
      'https://images.unsplash.com/photo-1614183653806-b4b9daed1954?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/d3_vmdKSE3c',
  },
  {
    id: 4,
    name: 'Poultry',
    description: 'Poultry includes chickens and ducks for eggs and meat.',
    imageUrl:
      'https://images.unsplash.com/photo-1588597989061-b60ad0eefdbf?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/1SGcrusk9aU',
  },
  {
    id: 5,
    name: 'Buffaloes',
    description: 'Buffaloes are strong and used for milk and plowing fields.',
    imageUrl:
      'https://images.unsplash.com/photo-1632353010501-9c012d270d32?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/Gih47C8_shE',
  },
  {
    id: 6,
    name: 'Horses',
    description: 'Horses are used for riding and farm transport.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661855036857-7855c8de519e?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/bHiZjBCnGbM',
  },
  {
    id: 7,
    name: 'Dogs',
    description: 'Dogs are loyal companions and help in herding livestock.',
    imageUrl:
      'https://images.unsplash.com/photo-1677108581323-7050fbfd528f?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/NOFaHjYm5SA',
  },
  {
    id: 8,
    name: 'Cats',
    description: 'Cats are pets that also control pests on farms.',
    imageUrl:
      'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/xbs7FT7dXYc',
  },
  {
    id: 9,
    name: 'Rabbits',
    description: 'Rabbits are raised for fur and meat.',
    imageUrl:
      'https://images.unsplash.com/photo-1589933767411-38a58367efd7?auto=format&fit=crop&q=60&w=600',
    videoUrl: 'https://www.youtube.com/embed/rZB06p7SaMc',
  },
]

function AnimalDetails() {
  const { id } = useParams()
  const animal = animallist.find(each => each.id === parseInt(id))

  if (!animal) {
    return <h2 className='no-results'>Animal not found</h2>
  }

  return (
    <div className='animal'>
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

      <div className='animal-details'>
        <div className='animaldetails'>
          <h1 className='animal-name'>{animal.name}</h1>
          <img src={animal.imageUrl} alt={animal.name} className='animal-image' />
          <p className='description'>{animal.description}</p>
          <Link to='/animals'>
            <button className='back-button'>← Back to Animals</button>
          </Link>
        </div>
        <div className='video-container'>
          <iframe
            src={animal.videoUrl}
            title={animal.name}
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

export default AnimalDetails
