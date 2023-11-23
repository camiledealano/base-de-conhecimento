import Image from 'next/image';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand font-croissant" href="/">
                    <Image src="/icon.png" className='d-inline-block align-top mr-2' width={30} height={30} priority/>
                    <span>BC - Base do Conhecimento</span>
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto font-nunito-bold">
                        <li className={'nav-item'}>
                            <a href="/" className="nav-link font-nunito-bold">Home</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href="/articles/list" className="nav-link font-nunito-bold">Artigos</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href="/users/list" className="nav-link font-nunito-bold">Usuários</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href="/logout" className="nav-link font-nunito-bold">Sair</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href="/login" className="nav-link font-nunito-bold">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}