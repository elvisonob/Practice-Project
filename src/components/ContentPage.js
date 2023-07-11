import { useState, useEffect } from 'react';
import classes from './ContentPage.module.css';

const ContentPage = () => {
  const [data, setData] = useState([]);

  const sendingGetRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/content/get-Content');

      if (!response.ok) {
        throw Error('something went wrong with fetching Content');
      }

      const data = await response.json();
      setData(data.contents);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendingGetRequest();
  }, []);

  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        {data.map((post) => (
          <ul>
            <li>{post.name}</li>
            <li>{post.email}</li>
            <li>{post.message}</li>
          </ul>
        ))}
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ContentPage;
