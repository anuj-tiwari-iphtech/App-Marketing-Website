import img1 from '../assets/Feature/Blog/Blog1.png';
import img2 from '../assets/Feature/Blog/Blog2.jpg';
import img3 from '../assets/Feature/Blog/Blog3.png';
import img4 from '../assets/Feature/Blog/Blog4.jpg';
import img5 from '../assets/Feature/header.png'
import img6 from '../assets/Feature/Blog/Blog5.jpg'

import Blogimg from '../assets/Feature/Blog/BlogPageImg.jpg'
import Pagination from './Pagination';
import { useState } from 'react';

import './blogsPage.css'

const categories = ['All', 'Company', 'Trends', 'Products News'];

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
  {
    id: 4,
    img: img4,
    title: 'Reprehenderit laboris labore except',
    category: 'Company',
    categoryType: 'blue',
    date: 'Oct 19, 2022',
  },
  {
    id: 5,
    img: img5,
    title: 'Ut labore elit incididunt incididunt',
    category: 'Product News',
    categoryType: 'red',
    bgColor: '#FFA3DD',
    date: 'Oct 19, 2022',
  },
  {
    id: 6,
    img: img6,
    title: 'Veniam nostrud nostrud sint nis',
    category: 'Company',
    categoryType: 'blue',
    date: 'Oct 19, 2022',
  },
];

export default function BlogsPage() {

    const [active , setActive] = useState('All');
  return (
    <>
        <div className="blog-page">

            <div className='blog-page-container'>

                <div className='blog-page-header-container'>
                    <div><h1>Blogs</h1></div>

                    <div className='blog-page-button'>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={active === cat ? 'active' : ''}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='blog-page-img-container'>
                    <div className='blog-page-text'>
                        <div>
                        <h1>In sunt ea mollit</h1>
                        <p>Et sint adipisicing deserunt nostrud ullamco sit ut fugiat voluptate duis reprehenderit voluptate mollit adipisicing. Cupidatat exercitation ullamco ullamco ullamco ad velit aliqua consequat anim laborum.</p>
                        </div>
                        <div className='blog-page-end'>
                            <div className='span1'>Trends</div> <span>Oct 19, 2022</span>
                        </div>
                    </div>

                    
                        <img src={Blogimg} className='blog-page-img'/>
                    
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

            <Pagination/>

        </div>
    </>
  )
}