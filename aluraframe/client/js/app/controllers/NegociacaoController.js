class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //poupara digitação, não precisará repetir o código

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();

        //formas de converter o formato da data
        // let data = new Date(this._inputData.value.split('-'));

        // let data = new Date(this._inputData.value.replace(/-/g, ','));

        // let data = new Date(...
        //     this._inputData.value
        //     .split('-')
        //     .map(function (item, indice) {
        //        return item - indice % 2;
        //     })
        // );

        let data = new Date(...
            this._inputData.value //string
            .split('-') //array
            .map((item, indice) => item - indice % 2) //arrow function
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

      
    }
}