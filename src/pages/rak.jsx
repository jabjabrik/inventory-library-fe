import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ModalComp from '../components/Modal'
import TableComp from '../components/TableComp'
import axios from 'axios'
import PageHeading from '../components/Heading'
import { fetchAPI, refreshPage, sweetAlert } from '../utils'

export async function getStaticProps() {
    const bookshelves = (await axios.get('http://localhost:3001/api/bookshelves')).data.data
    return { props: { bookshelves } }
}

const initInputVal = { id: '', bookshelf: '' }

const rak = ({ bookshelves }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({ title: '', method: '', type: 'bookshelf' })
    const [inputVal, setInputVal] = useState(initInputVal)
    const [isDisable, setIsDisable] = useState(false);
    const router = useRouter();

    const handleSubmit = async (method, id) => {
        setIsDisable(true)
        console.log(method);
        if (method === 'create') fetchAPI(null, 'bookshelves', method, inputVal)
        if (method === 'update') fetchAPI(id, 'bookshelves', method, inputVal)
        refreshPage(router)
        setIsDisable(false)
        setIsOpen(false)
    }

    const handleReset = () => {
        setInputVal(initInputVal)
    }

    const handleCreateBtn = () => {
        setInputVal(initInputVal)
        setModalInfo({ ...modalInfo, title: 'tambah rak', method: 'create' })
        setIsOpen(true)
    }

    const handleUpdateBtn = (bookshelf) => {
        console.log(bookshelf);
        setInputVal(bookshelf)
        setModalInfo({ ...modalInfo, title: 'update rak', method: 'update' })
        setIsOpen(true)
    }

    const handleViewBtn = (bookshelf) => {
        setInputVal(bookshelf)
        setModalInfo({ ...modalInfo, title: 'detail rak', method: 'view' })
        setIsOpen(true)
    }

    const handleDeleteBtn = async (bookshelf) => {
        const alert = await sweetAlert()
        if (alert.isConfirmed) {
            fetchAPI(bookshelf.id, 'bookshelves').then(() => {
                refreshPage(router)
                Swal.fire('Deleted!', 'Data berhasil dihapus', 'success')
            })
        }
    }

    return (
        <main className="p-4" style={{ marginLeft: '200px' }}>
            <PageHeading name="rak" handleCreateBtn={handleCreateBtn} />
            <TableComp
                title="daftar rak"
                data={bookshelves}
                fields={[['nama', 'bookshelf']]}
                handleUpdateBtn={handleUpdateBtn}
                handleViewBtn={handleViewBtn}
                handleDeleteBtn={handleDeleteBtn}
                width={'800px'}
                simply
            />
            <ModalComp
                handleSubmit={handleSubmit}
                handleReset={handleReset}
                inputVal={inputVal}
                setInputVal={setInputVal}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalInfo={modalInfo}
                isDisable={isDisable}
            />
        </main>
    )
}

export default rak