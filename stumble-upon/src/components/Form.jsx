const Form = ({ attribute, handleClick }) => {
    return (
        <div className="attribute-button">
        <form className="form-container">
            <input
                type="button"
                name={attribute}
                value={attribute}
                onClick={handleClick}
                className="button"
                />
                </form>
        </div>
    )
};
export default Form;