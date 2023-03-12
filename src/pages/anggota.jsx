import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ModalComp from '../components/Modal'
import TableComp from '../components/TableComp'
import axios from 'axios'
import PageHeading from '../components/Heading'
import { fetchAPI, refreshPage, sweetAlert } from '../utils'

export const getStaticProps = async () => {
    const result = (await axios.get('http://localhost:3001/api/users')).data
    return { props: { users: result.data } }
}

const initInputVal = {
    id: '',
    name: '',
    birth_place: '',
    birth_date: '',
    address: '',
    phone_number: '',
    gender: '',
}

const Anggota = ({ users }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [modalInfo, setModalInfo] = useState({ title: '', method: '', type: 'user' })
    const [inputVal, setInputVal] = useState(initInputVal)
    const router = useRouter();

    const handleSubmit = async (method, id) => {
        setIsDisable(true)
        if (method === 'create') fetchAPI(null, 'users', method, inputVal)
        if (method === 'update') fetchAPI(id, 'users', method, inputVal)
        refreshPage(router)
        setIsDisable(false)
        setIsOpen(false)
    }

    const handleReset = () => {
        setInputVal(initInputVal)
    }

    const handleCreateBtn = () => {
        setInputVal(initInputVal)
        setModalInfo({ ...modalInfo, title: 'tambah anggota', method: 'create' })
        setIsOpen(true)
    }

    const handleUpdateBtn = (user) => {
        setInputVal(user)
        setModalInfo({ ...modalInfo, title: 'update anggota', method: 'update' })
        setIsOpen(true)
    }

    const handleViewBtn = (user) => {
        setInputVal(user)
        setModalInfo({ ...modalInfo, title: 'detail anggota', method: 'view' })
        setIsOpen(true)
    }

    const handleDeleteBtn = async (user) => {
        const alert = await sweetAlert()
        if (alert.isConfirmed) {
            fetchAPI(user.id, 'users').then(() => {
                refreshPage(router)
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            })
        }
    }

    return (
        <main className="p-4" style={{ marginLeft: '200px' }}>
            <PageHeading name="anggota" handleCreateBtn={handleCreateBtn} />
            <TableComp
                title="daftar anggota"
                data={users}
                fields={[['nama', 'name'], ['tempat lahir', 'birth_place'], ['tanggal lahir', 'birth_date'], ['jenis kelamin', 'gender']]}
                handleUpdateBtn={handleUpdateBtn}
                handleViewBtn={handleViewBtn}
                handleDeleteBtn={handleDeleteBtn}
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
        </main >
    )
}

export default Anggota;