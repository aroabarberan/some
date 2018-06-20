fetch('http://localhost/some/notes/php+ajax/index.html', {

})
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.error(err));