function Button({title, styles, clickEvent, type=""}) {
    return (
        <button className="btn" type={type} style={styles ? styles : null} onClick={clickEvent}>{title}</button>
    )
}

Button.defaultProps = {
    title: "Button",
    styles: {},
}

export default Button
