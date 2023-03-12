import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Icon from '../components/Icon';

const SideNav = () => {
    const roles = ['', 'anggota', 'buku', 'kategori', 'rak']
    // const roles = ['', 'anggota', 'buku', 'kategori', 'rak', 'peminjaman', 'pengembalian']
    const currPath = useRouter().pathname.replace('/', '')
    const [activeRole, setActiveRole] = useState(currPath)

    return (
        < div className="d-flex flex-column flex-shrink-0 p-3 position-fixed top-0 bg-light bottom-0 start-0" style={{ width: '200px' }}>
            <Link onClick={() => setActiveRole('')} href="/" className="d-flex align-items-center link-dark text-decoration-none">
                <Icon name='coffee' color='black' size={20} className='me-2 d-block' />
                <span className="fs-5 fw-semibold">Library</span>
            </Link>
            <hr />
            <ul className='nav nav-pills flex-column mb-auto'>
                {
                    roles.map((_role, i) =>
                        <li className="nav-item" key={i}>
                            <Link onClick={() => setActiveRole(_role)} href={`/${_role}`} className={`nav-link ${activeRole === _role ? 'active' : 'link-dark'}`}>
                                <Icon name={!_role ? 'dashboard' : _role} color={`${activeRole === _role ? 'white' : 'black'}`} size={16} className='me-3' />
                                <span className='text-capitalize'>{!_role ? 'dashboard' : _role}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div >
    );
}

export default SideNav;