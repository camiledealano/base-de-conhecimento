import SuccessMessage from "@/components/SuccessMessage"

export default function UserList() {
    return (
        <>
            <main className="mt-4">
                <SuccessMessage />

                <div className="mb-4" style={{ marginLeft: '6%', width: '150px' }}>
                    <a href="/users/new" className="btn btn-success d-flex align-items-center">
                        <i className="material-icons mr-2">add</i>
                        Novo usuário
                    </a>
                </div>

                <div className="list-data ">
                    <table className="table">
                        <thead>
                            <tr className="table-light">
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Usuário</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Nível</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>author id </td>
                                <td>author_name </td>
                                <td>user.author_user</td>
                                <td> user.author_email </td>
                                <td> user.author_level </td>
                                <td>user.author_status</td>
                                <td className="btn-group">
                                    <a href="/users/edit/iddoautor">
                                        <button className="btn btn-outline-primary btn-sm">
                                            <i className="material-icons">create</i>
                                        </button>
                                    </a>
                                    <div style={{ margin: '3px' }}></div>
                                    <a href="/users/delete/iddoautor">
                                        <button className="btn btn-outline-danger btn-sm">
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}