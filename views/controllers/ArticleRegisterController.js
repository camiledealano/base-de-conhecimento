import objectHash from "object-hash";
function cadastrarArtigo() {
    let titulo = document.querySelector('#input-titulo').value;
    let corpo = document.querySelector('#textarea-corpo').value;
    let palavrasChave = document.querySelector('#input-palavras-chave').value;
    let emailAutor = document.querySelector('#input-email-autor').value;
    let dataPublicacao = document.querySelector('#input-data').value;

    let idHash = objectHash.sha1(titulo + corpo + palavrasChave + emailAutor + dataPublicacao);

    const dadosArtigo = {
        "kb_id": idHash,
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

    console.log(JSON.stringify(dadosArtigo));

}
