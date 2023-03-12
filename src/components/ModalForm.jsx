const formUser = (handleChange, inputVal, method) => {
    return (
        <form className="row g-3">
            <div className="col-8">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input
                    onChange={handleChange}
                    value={inputVal.name}
                    disabled={method === 'view'}
                    type="text"
                    className="form-control"
                    id="name"
                />
            </div>
            {
                method !== 'create' && (
                    <div className="col-4">
                        <label htmlFor="ID" className="form-label">ID</label>
                        <input
                            onChange={handleChange}
                            value={inputVal.id}
                            disabled
                            type="number"
                            className="form-control"
                            id="ID"
                        />
                    </div>
                )
            }
            <div className="col-6">
                <label htmlFor="birth_place" className="form-label">Tempat lahir</label>
                <input
                    onChange={handleChange}
                    value={inputVal.birth_place}
                    disabled={method === 'view'}
                    type="text"
                    className="form-control"
                    id="birth_place"
                />
            </div>
            <div className="col-6">
                <label htmlFor="birth_date" className="form-label">Tanggal Lahir</label>
                <input
                    onChange={handleChange}
                    value={inputVal.birth_date}
                    disabled={method === 'view'}
                    type="date"
                    className="form-control"
                    id="birth_date"
                />
            </div>
            <div className="col-12">
                <label htmlFor="address" className="form-label">Alamat</label>
                <input
                    onChange={handleChange}
                    value={inputVal.address}
                    disabled={method === 'view'}
                    type="text"
                    className="form-control"
                    id="address"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="phone_number" className="form-label">No. Hp</label>
                <input
                    onChange={handleChange}
                    value={inputVal.phone_number}
                    disabled={method === 'view'}
                    type="number"
                    className="form-control"
                    id="phone_number"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="gender" className="form-label">jenis kelamin</label>
                <select value={inputVal.gender} onChange={handleChange} disabled={method === 'view'} id="gender" className="form-select">
                    <option>Pilih Gender...</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                </select>
            </div>
        </form>
    )
}
const formBook = (handleChange, inputVal, dropdownVal, method) => {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="category" className="form-label">Kategori</label>
                <select value={inputVal.category} onChange={handleChange} disabled={method === 'view'} id="category" className="form-select">
                    <option>Pilih kategori...</option>
                    {
                        dropdownVal.categoryList.map(({ id, name }) => (
                            <option className='text-capitalize' value={id} key={id}>{name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="bookshelf" className="form-label">Rak</label>
                <select value={inputVal.bookshelf} onChange={handleChange} disabled={method === 'view'} id="bookshelf" className="form-select">
                    <option>Pilih rak buku....</option>
                    {
                        dropdownVal.bookshelfList.map(({ id, name }) => (
                            <option value={id} key={id}>Rak buku {name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-7">
                <label htmlFor="title" className="form-label">Judul Buku</label>
                <input
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                    value={inputVal.title}
                    disabled={method === 'view'}
                />
            </div>
            <div className="col-5">
                <label htmlFor="isbn" className="form-label">ISBN</label>
                <input
                    className="form-control"
                    id="isbn"
                    onChange={handleChange}
                    value={inputVal.isbn}
                    disabled={method === 'view'}
                />
            </div>
            <div className="col-8">
                <label htmlFor="publisher" className="form-label">Penerbit</label>
                <input
                    className="form-control"
                    id="publisher"
                    onChange={handleChange}
                    value={inputVal.publisher}
                    disabled={method === 'view'}
                />
            </div>
            <div className="col-md-4">
                <label htmlFor="year" className="form-label">Tahun Terbit</label>
                <input
                    className="form-control"
                    id="year"
                    onChange={handleChange}
                    value={inputVal.year}
                    disabled={method === 'view'}
                />
            </div>
            <div className="col-6">
                <label htmlFor="author" className="form-label">Nama Pengarang</label>
                <input
                    className="form-control"
                    id="author"
                    onChange={handleChange}
                    value={inputVal.author}
                    disabled={method === 'view'}
                />
            </div>
            <div className="col-6">
                <label htmlFor="amount" className="form-label">Jumlah Buku</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    onChange={handleChange}
                    value={inputVal.amount}
                    disabled={method === 'view'}
                />
            </div>
        </form>
    )
}

const formCategory = (handleChange, inputVal, method) => {
    return (
        <form className="row g-3">
            <div className="col-8">
                <label htmlFor="category" className="form-label">Nama Kategori</label>
                <input
                    className="form-control"
                    id="category"
                    onChange={handleChange}
                    value={inputVal.category}
                    disabled={method === 'view'}
                />
            </div >
            {
                method !== 'create' && (
                    <div className="col-4">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input
                            className="form-control"
                            id="id"
                            value={inputVal.id}
                            disabled
                        />
                    </div >
                )
            }

        </form>
    )
}

const formBookshelf = (handleChange, inputVal, method) => {
    return (
        <form className="row g-3">
            <div className="col-8">
                <label htmlFor="bookshelf" className="form-label">Nama Rak</label>
                <input
                    className="form-control"
                    id="bookshelf"
                    onChange={handleChange}
                    value={inputVal.bookshelf}
                    disabled={method === 'view'}
                />
            </div >
            {
                method !== 'create' && (
                    <div className="col-4">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input
                            className="form-control"
                            id="id"
                            value={inputVal.id}
                            disabled
                        />
                    </div >
                )
            }
        </form>
    )
}

const ModalForm = ({ handleChange, inputVal, dropdownVal, modalInfo }) => {
    const formBody = () => {
        if (modalInfo.type === 'user') {
            return formUser(handleChange, inputVal, modalInfo.method)
        } else if (modalInfo.type === 'book') {
            return formBook(handleChange, inputVal, dropdownVal, modalInfo.method)
        } else if (modalInfo.type === 'category') {
            return formCategory(handleChange, inputVal, modalInfo.method)
        } else {
            return formBookshelf(handleChange, inputVal, modalInfo.method)
        }
    }

    return formBody()
}

export default ModalForm