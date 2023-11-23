export default function ArticleCard() {
    return (
        <>
            <div className="col col-lg-4 mb-3">
                <div className="card text-center h-100">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">titulo</h5>
                        <p className="card-text flex-grow-1">
                            body do arquivo
                        </p>
                        <figcaption className="blockquote-footer mb-0 text-body-secondary">
                            Escrito por <cite title="Source Title">nome do autor</cite>
                        </figcaption>
                        <p className="card-text">
                            <small className="text-body-tertiary">
                                Publicado em data de publicacao
                            </small>
                        </p>
                        <div className="text-center">
                            <button type="button" className="btn btn-danger mb-3 disabled">
                                <div className="d-flex align-items-center">
                                    <span className="material-icons" style={{marginRight: '7px'}}>favorite</span>
                                    <p className="mb-0">likes</p>
                                </div>
                            </button>
                        </div>
                        <a href="/articles/detail/<%= article.id %>" className="link-secondary">
                            <p style={{color: 'var(--primary)'}}>Saiba mais..</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}