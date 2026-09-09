import img1 from '../assets/CarrerPage/ourvalue1.jpg'
import img2 from '../assets/CarrerPage/ourvalue2.jpg'
import img3 from '../assets/CarrerPage/ourvalue3.jpg'

const blogData = [
    {
      id: 1,
      img: img1,
      title: 'Reprehenderit laboris labore except',
      category: 'Company',
      categoryType: 'blue',
      bgColor: '#6A86EAFF',
      date: 'Oct 19, 2022',
    },
    {
      id: 2,
      img: img2,
      title: 'Ut labore elit incididunt incididunt',
      category: 'Product News',
      categoryType: 'red',
      date: 'Oct 19, 2022',
    },
    {
      id: 3,
      img: img3,
      title: 'Veniam nostrud nostrud sint nis',
      category: 'Company',
      categoryType: 'blue',
      bgColor: '#facc15',
      date: 'Oct 19, 2022',
    },
  ];
  

export default function Ourvalues() {
    return (
        <section className="blog-section" style={{
            background: "#FAFAFBFF"}}>
          <div className="blog-container">
            
            <div className='carrer-page-our-value' >
                <h1>Our Values</h1>
            </div>
    
            <div className="blog-grid">
              {blogData.map((post) => (
                <article key={post.id} className="blog-card">
                    <div 
                        className="blog-img-wrapper" 
                        style={{ backgroundColor: post.bgColor }}
                    >
                        <img src={post.img} alt={post.title} className="blog-img" />
                    </div>
    
                  <div className="blog-overlay-content">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <div className="blog-footer">
                      <span className={`blog-tag tag-${post.categoryType}`}>
                        {post.category}
                      </span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
    
          </div>
        </section>
      );
 }