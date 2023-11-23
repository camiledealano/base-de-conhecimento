export default function UserEdit() {
    return (
        <>
            <main className="container container-form mt-5 mb-5">
                <h2 className="text-center mb-1">Editar Usuário</h2>
                <form action="/users/edit" method="POST" enctype="application/x-www-form-urlencoded">
                    <div className="col-md-12 mb-3">
                        <input type="hidden" name="author_id" value="<%= user.author_id %>" display></input>
                            <label for="inputnome4">Nome</label>
                            <input type="text" className="form-control focus-purple" id="inputnome4" name="author_name" value="<%= user.author_name %>"></input>
                            </div>
                            <div className="col-md-12 row mb-3">
                                <div className="col-md-6">
                                    <label for="inputEmail4">E-mail</label>
                                    <input type="email" className="form-control focus-purple" id="inputEmail4" name="author_email" value="<%= user.author_email %>"></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4">Senha</label>
                                    <input type="password" className="form-control focus-purple" id="inputPassword4" name="author_pwd" value="<%= user.author_pwd %>" style={{width: '105%'}}></input>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3 row">
                                <div className="col-md-6">
                                    <label for="inputEstado">Nível de Acesso</label>
                                    <select id="inputEstado" className="form-control focus-purple" name="author_level">
                                        <option value="" disabled selected>Escolher...</option>
                                        {/* <option <% if (user.author_level === 'administrador') { %> selected <% } %>>Administrador</option>
                                    <option <% if (user.author_level === 'normal') { %> selected <% } %>>Usuário Comum</option> */}
                            </select>
                    </div>
                    <div className="col-md-6" style={{marginTop: '28px'}}>
                        <span className="col-sm-3" style={{marginRight: '10px'}}>Status:</span>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input focus-purple" type="radio" name="author_status" id="gridRadios1" value="Ativo" checked></input>
                                <label className="form-check-label" for="gridRadios1">
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
                    <button type="submit" className="btn btn-success mt-2" style={{width: '150px'}}>Editar</button>
                </div>
            </form>
        </main >
        </>
    )
}