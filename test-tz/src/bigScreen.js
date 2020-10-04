import React, { useState } from 'react';
import style from './App.module.css';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: '50px',
  },
  icon: {
    paddingTop: 0,
  },
}));

function BigScreenCard(props) {
  const {
    description,
    ownername,
    iconserver,
    url_z,
    iconfarm,
    owner,
    title,
  } = props.info;

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.card}>
      <div className={style.cardhead}>
        <img
          className={style.ava}
          alt="avatar"
          src={`http://farm${iconfarm}.staticflickr.com/${iconserver}/buddyicons/${owner}.jpg`}
        ></img>
        <h5>{ownername}</h5>
      </div>
      <img className={style.mainimg} src={url_z} alt={title}></img>
      <div className={style.description}>
        <p>{description._content.replace(/(<([^>]+)>)/gi, '')}</p>
        <IconButton  className={classes.icon} onClick={handleOpen}>
          <FavoriteIcon />
          <Modal className={classes.modal} open={open} onMouseUp={handleClose}>
            <Alert severity="info">{`имя фотографа: ${ownername}, это же тоже идентификатор`}</Alert>
          </Modal>
        </IconButton>
      </div>
    </div>
  );
}

export default BigScreenCard;
