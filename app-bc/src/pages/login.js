export default function Login() {
    return (
        <>
            <main className="container d-flex flex-column justify-content-center align-items-center min-vh-100 ">
                <form className="form text-center justify-content-center" action="/login/autenticar" method="POST" enctype="application/x-www-form-urlencoded">
                    <p className="form-title">Entre na sua conta</p>
                    <div className="input-container">
                        <input name="user" placeholder="Digite seu e-mail" type="text"></input>
                    </div>
                    <div className="input-container">
                        <input name="password" placeholder="Digite sua senha" type="password"></input>
                    </div>
                    <button className="submit" type="submit">Entrar</button>

                </form>
            </main>
        </>
    )
}