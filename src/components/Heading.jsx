import Icon from './Icon'

const PageHeading = ({ name, handleCreateBtn }) => (
    <div className="d-flex justify-content-between">
        <h1 className="d-flex align-items-center text-gray-800">
            <Icon name={name} size="40" className="me-2" />
            <span className="fs-1 text-capitalize">{name}</span>
        </h1>
        <div>
            <button type="button" className="d-flex align-items-center py-2 btn btn-primary btn-sm" onClick={handleCreateBtn}>
                <Icon name="create" size="20" className="me-2" />
                <span className="text-capitalize">Tambah {name}</span>
            </button>
        </div>
    </div>
)

export default PageHeading