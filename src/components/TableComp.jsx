import { useState } from 'react';
import ButtonAction from './ButtonAction'
import PaginationComp from './PaginationComp'

const TableComp = ({ data, title, fields, width, handleUpdateBtn, handleDeleteBtn, handleViewBtn, simply = null }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    console.log(data);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const totalPages = Math.ceil(data.length / recordsPerPage)

    const records = data.slice(indexOfFirstRecord, indexOfLastRecord);
    return (
        <div className="card shadow m-4" style={{ width: width || 'auto' }}>
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{title}</h6>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-hover" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            {fields.map(([field]) => <th key={field}>{field}</th>)}
                            <th>Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.id}</td>
                                    {fields.map(([_, field]) => <td key={field}>{record[field]}</td>)}
                                    <td>
                                        <ButtonAction
                                            handleUpdateBtn={() => handleUpdateBtn(record)}
                                            handleViewBtn={() => handleViewBtn(record)}
                                            handleDeleteBtn={() => handleDeleteBtn(record)}
                                            simply={simply}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <PaginationComp
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default TableComp