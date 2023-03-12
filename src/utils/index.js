import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const sweetAlert = async () => {
    const MySwal = withReactContent(Swal)
    return await MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
}

export const fetchAPI = async (id, role, method, data) => {
    const url = (id) => `http://localhost:3001/api/${role}/${id ? id : ''}`

    try {
        switch (method) {
            case 'create':
                await axios.post(url(), data)
                break;
            case 'update':
                await axios.put(url(id), data)
                break;
            default:
                await axios.delete(url(id))
                break;
        }
    } catch (err) {
        throw new Error(err.message)
    }
}

export const refreshPage = (router) => {
    router.replace(router.asPath);
}