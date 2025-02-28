import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import UserProgressContext from '../../store/UserProgressContext';
import Button from '../UI/Button';

const Failure = () => {
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseFailure() {
        userProgressCtx.hideFailure();
    }
    
  return (
    <Modal open={userProgressCtx.progress === 'failure'} onClose={handleCloseFailure}>
        <div>
            <h2>Something went wrong.</h2>
            <p>Please try again later.</p>
        </div>

        <p className='modal-actions'>
            <Button textOnly onClick={handleCloseFailure}>Close</Button>
        </p>
    </Modal>
  );
}

export default Failure;