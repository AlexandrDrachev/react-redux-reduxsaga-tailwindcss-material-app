import React from 'react';

import { useDispatch } from 'react-redux';

const ModalConfirm = ({ data, onClose }) => {

  const { id, active, message, action, confirmButtonName } = data;

  const dispatch = useDispatch();
  const onCloseModalConfirm = () => {
    return onClose({
      active: false,
      id: null,
      message: '',
      action: null,
      confirmButtonName: '',
    });
  };

  return (
    <div className={`fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center`}>
      <div
        className="
        z-30 fixed top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75 flex flex-col justify-center items-center p-2"
      />
      <div className={`relative w-300 h-300 flex flex-col justify-center items-center`}>
        <div
        className={`
        absolute top-0 right-0 bottom-0 left-0 border border-white rounded flex flex-col justify-center items-center
        z-40 text-white
        `}
        >
          ModalConfirm
          <div>
            {message}
          </div>
          <div>
            <div onClick={() => onCloseModalConfirm()}>cancel</div>
            <div onClick={() => dispatch(action(data))}>ok</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
