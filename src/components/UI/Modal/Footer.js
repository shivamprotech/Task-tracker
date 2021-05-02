import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from '../Button';

function Footer({handleClose}) {
    return (
        <>
            <ModalFooter>
              <Button title="Close" clickEvent={handleClose} />
              <Button title="Save" onClick={handleClose} />
            </ModalFooter>
        </>
    )
}

export default Footer
