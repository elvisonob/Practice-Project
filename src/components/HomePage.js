import classes from './HomePage.module.css';
import { useState } from 'react';
const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
    setName('');
    setEmail('');
    setMessage('');

    try {
      const response = await fetch(
        'http://localhost:5000/content/post-content',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw Error('Something is wrong');
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.layout}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onNameHandler}
            />
          </div>
          <div>
            <label htmlFor="name">Email Address</label>
            <input
              type="text"
              id="name"
              value={email}
              onChange={onEmailHandler}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="comment"
              rows="5"
              cols="33"
              value={message}
              onChange={onMessageHandler}
            ></textarea>
          </div>
          <button>Submits</button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
