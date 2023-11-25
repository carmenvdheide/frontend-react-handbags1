function Tile(props) {

    if (props.img) {
        return (
            <section>
                <img src={props.img} alt="image"/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{props.title}</h2>
                {props.children}
            </section>
        )
    }
}

export default Tile
