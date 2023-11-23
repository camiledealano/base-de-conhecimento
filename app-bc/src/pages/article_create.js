import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ArticleCreate() {
    return (
        <>
            <Header />
            <main className="container container-form mt-5 mb-5">
                <h2 className="text-center mb-2">Cadastro de Artigo</h2>
                <form className="row g-3" action="/articles/create" method="POST" enctype="application/x-www-form-urlencoded">
                    <div className="col-md-12">
                        <label for="title" className="form-label">Título</label>
                        <input type="text" className="form-control focus-purple" name="title"></input>
                    </div>
                    <div className="col-md-12">
                        <label for="body" className="form-label">Corpo do texto</label>
                        <textarea className="form-control focus-purple" name="body" style={{height: '200px'}}></textarea>
                    </div>
                    <div className="col-12">
                        <label for="keywords" className="form-label">Palavras-chave</label>
                        <input type="text" className="form-control focus-purple" name="keywords"></input>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <label for="author_name" className="form-label">Nome do autor</label>
                                <input type="text" className="form-control focus-purple" name="author_name"></input>
                            </div>
                            <div className="col-md-6">
                                <label for="published_date" className="form-label">Data de publicação</label>
                                <input type="text" className="form-control focus-purple" name="published_date"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3" style={{marginTop: '28px'}}>
                        <span className="col-sm-3" style={{marginRight: '12px'}}>Artigo destaque?</span>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input focus-purple" type="radio" name="featured" id="gridRadios1" value="on" checked></input>
                                <label className="form-check-label focus-purple" for="gridRadios1">
                                    Sim
                                </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input focus-purple" type="radio" name="featured" id="gridRadios2" value="off"></input>
                                <label className="form-check-label" for="gridRadios2">
                                    Não
                                </label>
                        </div>
                    </div>
                    <div className="text-center btn-cadastrar-artigo">
                        <button type="submit" className="btn btn-success" style={{width: '150px'}}>Cadastrar</button>
                    </div>
                </form>
            </main>

            <Footer />
        </>
    )
}