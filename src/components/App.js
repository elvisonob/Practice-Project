import HomePage from './HomePage.js';
import { Fragment, useState } from 'react';
import ContentPage from './ContentPage';
import EditContent from './EditContent';

const App = () => {
  const [editForm, setEditForm] = useState(false);

  const editFormPage = () => {
    setEditForm(!editForm);
  };

  return (
    <Fragment>
      <HomePage />
      {editForm && <EditContent />}
      <ContentPage onOpenNewForm={editFormPage} />
    </Fragment>
  );
};

export default App;
