var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
var CardConfirm = document.getElementById("CardConfirm");
var dark = false;

function darkMode() {

    var element = document.body;
    element.classList.toggle("dark-mode");

    var TextInputs = document.getElementsByClassName("inputs");
    TextInputs.classList.add("dark");
}
 
function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = formatData(date);

    console.log(dateGlobal)

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = dateGlobal;
   
    CardConfirm.classList.remove("hide");
}

function formatData(data) {
    return data.toLocaleString('pt-BR', {
        "day" :"numeric",
        "month" :"numeric",
        "year" :"numeric",
        "hour" : "numeric",
        "minute": "numeric",
        "second": "numeric"
    }
    )
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=NOME DO RECEPTOR(A): " +
        nomeGlobal +
        " - " +
        mensagemGlobal +
        " - " +
        dateGlobal;

    window.open(linkWhatsApp, "_blank");
}