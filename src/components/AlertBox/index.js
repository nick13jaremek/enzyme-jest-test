import React from 'react';
import { useDispatch } from 'react-redux';
import { createAlert } from '../../actions';

const AlertBox = () => {
  const dispatch = useDispatch();
  const clickFn = () => {
    dispatch(createAlert('New alert message'));
  };

  return (
    <div>
    <button onClick={clickFn}>Create alert message</button> 
    </div>
  );
};

export default AlertBox;
