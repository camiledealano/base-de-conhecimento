function cadastrarArtigo() {
    let titulo = document.querySelector('#input-titulo').value;
    let corpo = document.querySelector('#textarea-corpo').value;
    let palavrasChave = document.querySelector('#input-palavras-chave').value;
    let emailAutor = document.querySelector('#input-email-autor').value;
    let dataPublicacao = document.querySelector('#input-data').value;

    const dadosArtigo = {
        "kb_id": "",
        "kb_title": titulo,
        "kb_body": corpo,
        "kb_permalink": "",
        "kb_keywords": palavrasChave,
        "kb_liked_count": 0,
        "kb_published": false,
        "kb_suggestion": false,
        "kb_featured": false,
        "kb_author_email": emailAutor,
        "kb_published_date": dataPublicacao
      };

    fetch("http://localhost:9000/cadastrar-artigo", {
        method: 'POST',
        body: JSON.stringify(dadosArtigo),
        headers: {
          'Content-Type': 'application/json'
      },
    }).then((response) => {
      if (response.status === 200) {
          //redireciona pra algum lugar
      }
    })
}