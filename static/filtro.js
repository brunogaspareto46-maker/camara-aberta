(function () {
  var busca = document.getElementById("busca");
  var sit = document.getElementById("f-situacao");
  var imp = document.getElementById("f-importancia");
  var soc = document.getElementById("f-impacto");   // só existe quando há avaliação de impacto
  function sem(t) { return t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function aplicar() {
    var q = sem(busca.value.trim()), s = sit.value, i = parseInt(imp.value, 10), c = soc ? soc.value : "";
    document.querySelectorAll("table.filtravel tbody tr").forEach(function (tr) {
      var ok = (!q || sem(tr.dataset.busca).indexOf(q) >= 0)
        && (!s || tr.dataset.situacao === s)
        && (!c || tr.dataset.impacto === c)
        && parseInt(tr.dataset.importancia, 10) >= i;
      tr.hidden = !ok;
    });
  }
  [busca, sit, imp, soc].forEach(function (el) { if (el) el.addEventListener("input", aplicar); });
})();
