class NegociacaoController {

    //o constructor vai buscar e armazenar a informação nos atributos da classe NegociacaoController
    constructor() {

        let $ = document.querySelector.bind(document); //poupara digitação, não precisará repetir o código
        //querySelector remete ao this(document), quando colocamos numa variável isso se perde sem o .bind()

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }
    adiciona(event) {
        event.preventDefault();

        // let helper = new DateHelper().textoParaData(this._inputData.value); subustituido para usar método estático


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

        //está estava sendo utilizada até a criação do DateHelper
        // let data = new Date(...
        //     this._inputData.value //string
        //     .split('-') //array
        //     .map((item, indice) => item - indice % 2) //arrow function
        // );


        //foi criado o método _criaNegociacao
        // let negociacao = new Negociacao(
        //     DateHelper.textoParaData(this._inputData.value),
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );


        //está estava sendo utilizada até a criação do DateHelper
        // let diaMesAno = negociacao.data.getDate() + '/' + (negociacao.data.getMonth() + 1) + '/' + negociacao.data.getFullYear();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes);


        // let form = document.querySelector('.form');
        // form.reset();
        // this._inputData.focus();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        document.querySelector(".form").reset();
        this._inputData.focus();
    }

}