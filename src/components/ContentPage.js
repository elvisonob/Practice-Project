import { useState, useEffect } from 'react';
import classes from './ContentPage.module.css';

const ContentPage = (props) => {
  const [data, setData] = useState([]);

  const sendingGetRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/content/get-Content');

      if (!response.ok) {
        throw Error('something went wrong with fetching Content');
      }

      const data = await response.json();
      setData(data.contents);
      console.log(data.contents);
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
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <p>{post.name}</p>
              <p>{post.email}</p>
              <p>{post.message}</p>
              <button onClick={props.onOpenNewForm}>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentPage;
