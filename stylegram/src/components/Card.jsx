const Card = ({id, caption, created_day, author}) => {
    return (
        <>
            <h3>{author}</h3>
            <p>{id}</p>
            <p>{created_day}</p>
            <p>{caption}</p>
        </>
    )
}
export default Card;
