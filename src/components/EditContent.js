import React, { useState, useEffect } from 'react';

const EditContent = () => {
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editMessage, setEditMessage] = useState('');
  const [data, setData] = useState([]);

  // const { id } = useParams();

  const nameHandler = (e) => {
    setEditName(e.target.value);
  };

  const emailHandler = (e) => {
    setEditEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setEditMessage(e.target.values);
  };

  const sendingGetRequest2 = async () => {
    try {
      const response = await fetch('http://localhost:5000/content/get-Content');

      if (!response.ok) {
        throw Error('something went wrong with fetching Content');
      }

      const data1 = await response.json();
      setData(data1.contents);
      console.log(data1);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    sendingGetRequest2();
  }, []);

  const updateUserAgain = async (ids) => {
    for (const key in data) {
      data[key].id = ids;
      ids = data[key].id;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/content/edit-content/${ids}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: editName,
            email: editEmail,
            message: editMessage,
          }),
        }
      );
      if (!response.ok) {
        throw Error('Something has gone wrong with edit');
      }
    } catch (err) {
      throw Error(err.message);
    }
  };

  return (
    <div>
      <form>
        <div className>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={editName}
              onChange={nameHandler}
            />
          </div>
          <div>
            <label htmlFor="name">Email Address</label>
            <input
              type="text"
              id="name"
              value={editEmail}
              onChange={emailHandler}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="comment"
              rows="5"
              cols="33"
              value={editMessage}
              onChange={messageHandler}
            ></textarea>
          </div>
          <button onClick={updateUserAgain(data.id)}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditContent;
