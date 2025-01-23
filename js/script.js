function menu(pagina) {
    $("#conteudo").slideUp("slow", () => {
        $("#conteudo").load("../paginas/" + pagina + ".html", () => {
            $("#conteudo").slideDown(1000);
        });
    });
}