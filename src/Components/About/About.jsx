import './About.css'
export default function About() {
  return (
    <div className="about d-flex align-items-center">
        <div className='container'>
            <div className="info p-5 text-center">
                <h2 className="text-uppercase text-white fw-bold">about component</h2>
                <span className="text-white position-relative"><i className="fa-solid fa-star"></i></span>
                <p className='text-white mt-4'>Graphic Artist - Web Designer - Illustrator</p>
                <div className="desc d-flex flex-column flex-md-row gap-md-5 text-white text-start">
                  <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                  <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}
