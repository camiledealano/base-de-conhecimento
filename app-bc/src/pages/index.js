import CustomHead from "@/components/CustomHead"
import ArticleCard from "@/components/ArticleCard"

export default function Home() {
  return (
    <>
      <CustomHead />
      {/* add customhead no document.js pra ser padrao em todas as telas */}
      <div className="d-flex justify-content-center align-items-center mt-5">
        <h2 className="welcome">Olá, nome do autor!</h2>
      </div>

      <main className="container" id="artigos">
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-8">
              <form action="" method="GET">
                <div className="input-group">
                  <input type="search" className="form-control focus-purple" placeholder="Busque por palavras-chaves..." name="q" />
                  <button className="btn btn-rounded focus-purple" type="submit" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    <i className="material-icons">search</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


        mostra isso aqui quando encontra artigos mediante a pesquisa acima
        <div className="card mb-5 mt-5 row">
          <h4 className="card-header text-center mb-4" style={{ fontWeight: 'bold' }}>Artigos encontrados</h4>
          <div className="row">
            <ArticleCard />
          </div>
        </div>

        mostra os destaques
        <div className="card mb-5 mt-5 row">
          <h4 className="card-header text-center mb-4" style={{ fontWeight: 'bold' }}>Destaques</h4>
          <div className="row">
            <ArticleCard />
          </div>
        </div>

        os 10 mais curtidos
        <div className="card mb-4 row">
          <h4 className="card-header text-center mb-4" style={{ fontWeight: 'bold' }}>Os 10 mais curtidos</h4>
          <div className="row">
            <ArticleCard />
          </div>
        </div>

        todos os artigos
        <div className="card mb-4 row">
          <h4 className="card-header text-center mb-4" style={{ fontWeight: 'bold' }}>Todos os Artigos</h4>
          <div className="row">
            <ArticleCard />
          </div>
        </div>
      </main>

    </>
  )
}
