import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm';

const ModalComp = ({ handleSubmit, handleReset, isOpen, setIsOpen, inputVal, setInputVal, modalInfo, isDisable, dropdownVal = null }) => {
    const handleChange = ({ target }) => {
        const { value, id } = target
        console.log(value, id);
        setInputVal({ ...inputVal, [id]: value })
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title className="text-capitalize">{modalInfo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalForm
                    handleChange={handleChange}
                    inputVal={inputVal}
                    dropdownVal={dropdownVal}
                    modalInfo={modalInfo}
                />
            </Modal.Body>
            {modalInfo.method !== 'view' && (
                <Modal.Footer>
                    <Button variant="danger" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="primary" disabled={isDisable} onClick={() => handleSubmit(modalInfo.method, inputVal.id)}>
                        {`${modalInfo.method === 'update' ? 'update' : 'simpan'}`}
                    </Button>
                </Modal.Footer>
            )}
        </Modal>
    );
}

export default ModalComp