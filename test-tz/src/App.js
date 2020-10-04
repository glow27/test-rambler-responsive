import React, { useEffect, useState } from 'react';
import Card from './Card';
import style from './App.module.css';

function App() {
  const [data, setData] = useState(null);
  const path =
    'https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=71800c8d41aa0a671ce844fd337b4885&extras=description%2C+owner_name%2C+icon_server%2C+url_z&format=json&nojsoncallback=1';

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((json) =>
        setData([json.photos.photo.slice(0, 5), json.photos.photo.slice(5, 10), json.photos.photo.slice(10, 16),])
      );
  }, []);
  //ну да (:
  return (
    <div className={style.main}>
      <div>{data && data[0].map((el, i) => <Card key={i} info={el} />)}</div>
      <div>{data && data[1].map((el, i) => <Card key={i} info={el} />)}</div>
      <div>{data && data[2].map((el, i) => <Card key={i} info={el} />)}</div>
    </div>
  );
}

export default App;
