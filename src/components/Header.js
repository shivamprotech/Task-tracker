import propTypes from 'prop-types';
import Button from './UI/Button';
import {Row, Col} from 'react-bootstrap'


function Header({title, showTaskForm, showTask}) {
    return (
        <div>
            <Row>
                <Col sm={10}>
                    <h1>{title}</h1>
                </Col>
                <Col sm={2}>
                    <Button title={showTask ? "Close": "Add"} clickEvent={showTaskForm}/>
                </Col>
            </Row>
        </div>
    )
}

Header.defaultProps = {
    title: "New App",
}

Header.propTypes = {
    title: propTypes.string,
    showTaskForm: propTypes.func,
}
export default Header
