import Modal from 'react-bootstrap/Modal';
import Header from './Header';
import Body from './Body';

function ShowModal({dataToShow, show, handleClose}) {
    return (
        <div>
          <Modal show={show} onHide={handleClose}>
            <Header title="Task Updater" />
            <Body body={dataToShow}/>
          </Modal>
        </div>
      );
}

export default ShowModal
