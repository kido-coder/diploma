import '../Style/Modal.css'

const Modal = ({ handleClose, show, children, nodeID }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    if (nodeID.length > 5)
        nodeID = "User ID : " + nodeID
    else if (nodeID.length > 2)
        nodeID = "Node ID : " + nodeID
    else 
        nodeID = "Record ID : " + nodeID
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p style={{ margin: '1rem 0 1rem 1rem', fontWeight: 'bold' }}>{nodeID}</p>
                {children}
                <button type="button" className='close' onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;