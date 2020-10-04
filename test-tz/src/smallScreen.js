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
    alignSelf: 'flex-start',
    padding: '1vw',
  },
}));

function SmallScreenCard(props) {
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
      <img className={style.mainimg} src={url_z} alt={title}></img>
      <div className={style.description}>
        <div className={style.cardhead}>
          <img
            alt="avatar"
            className={style.ava}
            src={`http://farm${iconfarm}.staticflickr.com/${iconserver}/buddyicons/${owner}.jpg`}
          ></img>
          <h5>{ownername.slice(0, 20)}</h5>
          <div>
            <IconButton className={classes.icon} onClick={handleOpen}>
              <FavoriteIcon />
              <Modal
                className={classes.modal}
                open={open}
                onMouseUp={handleClose}
              >
                <Alert severity="info">{`имя фотографа: ${ownername}, это же тоже идентификатор`}</Alert>
              </Modal>
            </IconButton>
          </div>
        </div>
        <div>
          <p>{description._content.replace(/(<([^>]+)>)/gi, '')}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallScreenCard;
