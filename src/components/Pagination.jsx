import './Pagination.css';
import { useState } from 'react';

export default function Pagination() {
  const [activePage, setActivePage] = useState(2);

  return (
    <div className="pagination">
      <button className="page-arrow">&lt;</button>
      
      <button 
        className={`page-item ${activePage === 1 ? 'active' : ''}`}
        onClick={() => setActivePage(1)}
      >
        1
      </button>

      <button 
        className={`page-item ${activePage === 2 ? 'active' : ''}`}
        onClick={() => setActivePage(2)}
      >
        2
      </button>

      <button 
        className={`page-item ${activePage === 3 ? 'active' : ''}`}
        onClick={() => setActivePage(3)}
      >
        3
      </button>

      <button 
        className={`page-item ${activePage === 4 ? 'active' : ''}`}
        onClick={() => setActivePage(4)}
      >
        4
      </button>

      <span className="page-dots">...</span>

      <button 
        className={`page-item ${activePage === 10 ? 'active' : ''}`}
        onClick={() => setActivePage(10)}
      >
        10
      </button>

      <button 
        className={`page-item ${activePage === 11 ? 'active' : ''}`}
        onClick={() => setActivePage(11)}
      >
        11
      </button>

      <button className="page-arrow">&gt;</button>
    </div>
  );
}