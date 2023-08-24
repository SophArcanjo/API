function localizacao(){
    var cep = document.getElementById('cep').value;
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data)
            var p1 = document.getElementById('p1');
            var p2 = document.getElementById('p2');
            var p3 = document.getElementById('p3');
            var p4 = document.getElementById('p4');
            var p5 = document.getElementById('p5');
            var p6 = document.getElementById('p6');
            var p7 = document.getElementById('p7');
            var p8 = document.getElementById('p8');
            var p9 = document.getElementById('p9');
            var p10 = document.getElementById('p10');
            
            p1.innerHTML = data.bairro;
            p2.innerHTML = data.cep;
            p3.innerHTML = data.complemento;
            p4.innerHTML = data.ddd;
            p5.innerHTML = data.gia;
            p6.innerHTML = data.ibge;
            p7.innerHTML = data.localidade;
            p8.innerHTML = data.logradouro;
            p9.innerHTML = data.siafi;
            p10.innerHTML = data.uf;

        })
}

