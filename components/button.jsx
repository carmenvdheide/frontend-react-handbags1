function Button(props) {
    function getOnClick() {
         console.log(props.name)
    }
    return(
        <button type="button" onClick={getOnClick} disabled={props.disabled}>{props.name} </button>
    )
}

export default Button