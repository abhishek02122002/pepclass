import { useState, useEffect } from 'react';
import '../App.css';

export default function FirstClass() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setItems(data.slice(0,4)))
      .catch(err => console.log(err));
  }, [resourceType]);

  return (
    <div className='btn-div'>
     <div className='btn-section'>
      <button type="button" onClick={() => setResourceType('posts')}>Post</button>
      <button type="button" onClick={() => setResourceType('comments')}>Comments</button>
      <button type="button" onClick={() => setResourceType('photos')}>Photos</button>
      <button type="button" onClick={() => setResourceType('users')}>Users</button>
     </div>
      <div className='container-section'>
        {items.length > 0 ? (
          <ul className='ul-list'>
            {items.map(item => (
              <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
