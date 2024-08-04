import './Home.css'
import avatar from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <div className="home">
        <div className='container'>
            <div className="info p-5 text-center">
                <img src={avatar} alt="avatar" className="img-fluid w-25 mb-4" />
                <h2 className="text-uppercase text-white fs-2">start Framework</h2>
                <span className="text-white position-relative"><i className="fa-solid fa-star"></i></span>
                <p className='text-white mt-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
  )
}
