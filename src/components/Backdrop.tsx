export const Backdrop: React.FC<{onCancel: any}> = (props) => {
    console.log(props);

    return (
        <div className="backdrop" onClick={props.onCancel}></div>
    );
}