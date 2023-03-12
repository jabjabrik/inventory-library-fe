import Icon from './Icon';

const ButtonAction = ({ simply, handleUpdateBtn, handleViewBtn, handleDeleteBtn }) => {
    return (
        <div className="btn-group btn-group-sm" role="group">
            {!simply && (
                <>
                    <button type="button" className="btn btn-outline-primary text-capitalize" onClick={handleViewBtn}>
                        <Icon name="view" size="16" className="me-1" />
                        <span>view</span>
                    </button>
                    <button type="button" className="btn btn-outline-danger text-capitalize" onClick={handleDeleteBtn}>
                        <Icon name="delete" size="16" className="me-1" />
                        <span>delete</span>
                    </button>
                </>
            )}
            <button type="button" className="btn btn-outline-success text-capitalize" onClick={handleUpdateBtn} >
                <Icon name="update" size="16" className="me-1" />
                <span>edit</span>
            </button>
        </div>
    )
}

export default ButtonAction;