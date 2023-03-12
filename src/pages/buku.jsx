import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ModalComp from '../components/Modal'
import TableComp from '../components/TableComp'
import axios from 'axios'
import PageHeading from '../components/Heading'
import { fetchAPI, refreshPage, sweetAlert } from '../utils'

export async function getStaticProps() {
    const bookList = (await axios.get('http://localhost:3001/api/books')).data.data;
    const categoryList = (await axios.get('http://localhost:3001/api/categories')).data.data;
    const bookshelfList = (await axios.get('http://localhost:3001/api/bookshelves')).data.data;

    return { props: { books: { bookList, categoryList, bookshelfList } } }
}

const initInputVal = {
    isbn: '',
    title: '',
    author: '',
    publisher: '',
    year: '',
    amount: '',
    category: '',
    bookshelf: ''
}

const Buku = ({ books }) => {
    const { categoryList, bookshelfList } = books
    const [isOpen, setIsOpen] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [modalInfo, setModalInfo] = useState({ title: '', method: '', type: 'book' })
    const [inputVal, setInputVal] = useState(initInputVal);
    const [dropdownVal] = useState({ categoryList, bookshelfList })
    const router = useRouter();

    const handleSubmit = async (method, id) => {
        setIsDisable(true)
        if (method === 'create') fetchAPI(null, 'books', method, inputVal)
        if (method === 'update') fetchAPI(id, 'books', method, inputVal)
        refreshPage(router)
        setIsDisable(false)
        setIsOpen(false)
    }

    const handleReset = () => {
        setInputVal(initInputVal)
    }

    const handleCreateBtn = () => {
        setInputVal(initInputVal)
        setModalInfo({ ...modalInfo, title: 'tambah buku', method: 'create' })
        setIsOpen(true)
    }

    const handleUpdateBtn = (user) => {
        setInputVal(user)
        console.log(inputVal);
        setModalInfo({ ...modalInfo, title: 'update buku', method: 'update' })
        setIsOpen(true)
    }

    const handleViewBtn = (user) => {
        setInputVal(user)
        setModalInfo({ ...modalInfo, title: 'detail buku', method: 'view' })
        setIsOpen(true)
    }

    const handleDeleteBtn = async (user) => {
        const alert = await sweetAlert()
        if (alert.isConfirmed) {
            fetchAPI(user.id, 'books').then(() => {
                refreshPage(router)
                Swal.fire('Deleted!', 'Data berhasil dihapus', 'success')
            })
        }
    }

    return (
        <main className="p-4" style={{ marginLeft: '200px' }}>
            <PageHeading name="buku" handleCreateBtn={handleCreateBtn} />
            <TableComp
                title="daftar buku"
                data={books.bookList}
                fields={[['isbn', 'isbn'], ['judul', 'title'], ['penulis', 'author'], ['tahun', 'year'], ['jumlah', 'amount']]}
                // fields={[['isbn', 'isbn'], ['judul', 'title'], ['penulis', 'author'], ['tahun', 'year'],['jumlah','amount'],['dipinjam', 'borrowing']]}
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
                dropdownVal={dropdownVal}
            />
        </main >
    )
}

export default Buku