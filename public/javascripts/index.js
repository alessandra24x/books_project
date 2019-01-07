axios.get('http://localhost:3030/api/books', function(result) {
    console.log(result.data);
    for (let i = 0; i < result.data.length; i++) {
        $('#books').append(`<li>${result.data[i].isbn} <button>Ver detalle</button></li>`)
    }
})