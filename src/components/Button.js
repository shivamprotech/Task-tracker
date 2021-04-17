function Button({title, styles, clickEvent}) {
    return (
        <button className="btn" style={styles ? styles : null} onClick={clickEvent}>{title}</button>
    )
}

Button.defaultProps = {
    title: "Button",
    styles: {},
}

export default Button
