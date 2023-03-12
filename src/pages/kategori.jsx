import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ModalComp from '../components/Modal'
import TableComp from '../components/TableComp'
import axios from 'axios'
import PageHeading from '../components/Heading'
import { fetchAPI, refreshPage, sweetAlert } from '../utils'

export async function getStaticProps() {
    const categories = (await axios.get('http://localhost:3001/api/categories')).data.data
    return { props: { categories } }
}

const initInputVal = { id: '', category: '' }

const Kategori = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({ title: '', method: '', type: 'category' })
    const [inputVal, setInputVal] = useState(initInputVal)
    const [isDisable, setIsDisable] = useState(false);
    const router = useRouter();

    const handleSubmit = async (method, id) => {
        setIsDisable(true)
        console.log(method);
        if (method === 'create') fetchAPI(null, 'categories', method, inputVal)
        if (method === 'update') fetchAPI(id, 'categories', method, inputVal)
        refreshPage(router)
        setIsDisable(false)
        setIsOpen(false)
    }

    const handleReset = () => {
        setInputVal(initInputVal)
    }

    const handleCreateBtn = () => {
        setInputVal(initInputVal)
        setModalInfo({ ...modalInfo, title: 'tambah kategori', method: 'create' })
        setIsOpen(true)
    }

    const handleUpdateBtn = (category) => {
        console.log(category);
        setInputVal(category)
        setModalInfo({ ...modalInfo, title: 'update kategori', method: 'update' })
        setIsOpen(true)
    }

    const handleViewBtn = (category) => {
        setInputVal(category)
        setModalInfo({ ...modalInfo, title: 'detail kategori', method: 'view' })
        setIsOpen(true)
    }

    const handleDeleteBtn = async (category) => {
        const alert = await sweetAlert()
        if (alert.isConfirmed) {
            fetchAPI(category.id, 'categories').then(() => {
                refreshPage(router)
                Swal.fire('Deleted!', 'Data berhasil dihapus', 'success')
            })
        }
    }

    return (
        <main className="p-4" style={{ marginLeft: '200px' }}>
            <PageHeading name="kategori" handleCreateBtn={handleCreateBtn} />
            <TableComp
                title="daftar kategori"
                data={categories}
                fields={[['name', 'category']]}
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

export default Kategori