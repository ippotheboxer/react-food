import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import UserProgressContext from '../../store/UserProgressContext';
import Button from '../UI/Button';

const Success = () => {
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseSuccess() {
        userProgressCtx.hideSuccess();
    }
  return (
    <Modal open={userProgressCtx.progress === 'success'} onClose={handleCloseSuccess}>
        <div>
            <h2>Order placed!</h2>
            <p>Thank you for your order!</p>
        </div>

        <p className='modal-actions'>
            <Button textOnly onClick={handleCloseSuccess}>Close</Button>
        </p>
    </Modal>
  )
}

export default Success;