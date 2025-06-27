import '../Style/Modal.css'
import { useState, useEffect } from 'react';

const NodeForm = ({ show, handleClose, type, nodeID }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [info, setInfo] = useState({ node_id: "", node_name: "", node_address: "" });
    const [message, setMessage] = useState([]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    var action = 'fetch_single_node';
    const fetchData = async () => {
        try {
            const response = await fetch('http://13.60.106.234:3001/operator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, nodeID }),
            });
            const data = await response.json();
            setInfo(data[0]);
            action = "update_node";
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        if (type === 'add_node') {
            setInfo({ node_id: "", node_name: "", node_address: "" })
            action = "add_node"
        }
        else {
            fetchData();
        }
    }, [action, nodeID]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (info.node_id.length < 5 || info.node_name.length === 0 || info.node_address.length === 0 || info.node_id[0] !== '#') {
            setMessage("Data missing/incorrect");
            setTimeout(() => {
                setMessage('');
            }, 5000);
        } else {

            if (type === 'add_node')
                action = "add_node"
            else
                action = "update_node"
            fetch('http://13.60.106.234:3001/operator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, info }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setMessage(data.message);
                    setTimeout(() => {
                        setMessage('');
                    }, 5000);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('Oops, try again?.');
                });
            setInfo({ node_id: "", node_name: "", node_address: "" })
        }
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <form onSubmit={handleSubmit} style={{ margin: '2rem' }}>
                    <label >Node ID</label><br />
                    <input className="inp full" type="text" id="node_id" name="node_id" value={info && info.node_id} onChange={handleChange} placeholder="Insert value here" /><br />
                    <label >Node name</label><br />
                    <input className="inp full" type="text" id="node_name" name="node_name" value={info && info.node_name} onChange={handleChange} placeholder="Insert value here" /><br />
                    <label >Node address</label><br />
                    <input className="inp full" type="text" id="node_address" name="node_address" value={info && info.node_address} onChange={handleChange} placeholder="Insert value here" /><br />
                    {message && <div className="alert">{message}</div>}
                    <div style={{ display: 'flex' }}>
                        <button type="submit" className='close'>
                            Save
                        </button>
                        <button type="button" className='close' onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default NodeForm;