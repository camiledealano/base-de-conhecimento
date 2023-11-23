export default function SuccessMessage() {
    return (
        <>
            <div className="container alert alert-success d-flex justify-content-between align-items-center" style={{width: '400px'}}>
                mensagem de sucesso ao cadastrar usuario/artigo
                <a href="" className="close" data-dismiss="alert">
                    <i className="material-icons" style={{color: 'var(--primary)'}}>close</i>
                </a>
            </div>
        </>
    )
}