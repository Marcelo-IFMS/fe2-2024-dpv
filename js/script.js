function menu(pagina) {
    $("#conteudo").hide("slow");
    $("#conteudo").load("../paginas/" + pagina + ".html");
    $("#conteudo").fadeIn(2000);
}