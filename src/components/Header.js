import propTypes from 'prop-types';
import Button from './Button';


function Header({title, showTaskForm, showTask}) {
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button title={showTask ? "Close": "Add"} clickEvent={showTaskForm}/>
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
