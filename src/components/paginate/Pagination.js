import React from 'react';
import './pagination.css'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <>
    
    <nav>
        
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <div onClick={() => paginate(number)} className='page-link'>
              {number}
            </div>
          </div>
        ))}
      </ul>
    </nav>

    </>
  );
};

export default Pagination;