export const Modal: React.FC<{onCancel: any, onConfirm: any}> = (props) => {

    const handleOnCancel = () => {
        props.onCancel();
    }
    const handleOnConfirm = () => {
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={handleOnCancel}>Cancel</button>
            <button className="btn" onClick={handleOnConfirm}>Confirm</button>
        </div>
    );

}