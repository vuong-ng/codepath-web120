const Gallery = ({images}) => {
    return (
        <>
        <h3>Your Screenshot Gallery!</h3>
        <div className="image-container">
            {images.length > 0 ? (
                    images.map((pic, index) => (
                        <li
                            className="gallery" key={index}>
                        <img className="gallery-screenshot"
                            src={pic}
                            alt="Undefined screenshot from query"
                            width="500" />
                        <p>{pic}, {index}</p>
                    </li>
                ))
            ) : (
                    <h3>You have not had any images yet!</h3>
                )}

            </div>
        </>
    );
};
export default Gallery;