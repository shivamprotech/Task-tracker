import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'


function Header({ title }) {
    return (
        <>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
        </>
    )
}

export default Header
