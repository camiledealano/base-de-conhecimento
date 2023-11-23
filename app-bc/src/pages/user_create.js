export default function UserCreate() {
    return (
        <>
            <main className="container container-form mt-5 mb-5">
                <h2 className="text-center mb-3">Cadastro de Usuário</h2>
                <form action="/users/create" method="POST" enctype="application/x-www-form-urlencoded">
                    <div className="col-md-12 mb-3">
                        <label for="name">Nome</label>
                        <input type="text" className="form-control focus-purple" id="name" name="author_name"></input>
                    </div>
                    <div className="col-md-12 row mb-3">
                        <div className="col-md-6">
                            <label for="email">E-mail</label>
                            <input type="email" className="form-control focus-purple" id="email" name="author_email"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="senha">Senha</label>
                            <input type="password" className="form-control focus-purple" id="senha" name="author_pwd" style={{ width: '105%' }}></input>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3 row">
                        <div className="col-md-6">
                            <label for="nivel-acesso">Nível de Acesso</label>
                            <select id="nivel-acesso" className="form-control focus-purple" name="author_level">
                                <option value="administrador">Administrador</option>
                                <option value="normal" selected>Usuário comum</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3" style={{ marginTop: '28px' }}>
                            <span className="col-sm-3" style={{ marginRight: '12px' }}>Status:</span>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input focus-purple" type="radio" name="author_status" id="gridRadios1" value="Ativo" checked ></input>
                                <label className="form-check-label focus-purple" for="gridRadios1">
                                    Ativo
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input focus-purple" type="radio" name="author_status" id="gridRadios2" value="Desativo"></input>
                                <label className="form-check-label" for="gridRadios2">
                                    Desativo
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center btn-cadastrar-artigo">
                        <button type="submit" className="btn btn-success mt-2" style={{ width: '150px' }}>Salvar</button>
                    </div>
                </form>
            </main>

        </>
    )
}