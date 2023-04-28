import Elem from "./Elem.js";
class Jatekter {
  #JatekterLista = [];
  constructor() {
    const szuloElem = $("article");
     let szam = 0;
    this.#JatekterLista=[" "," "," "," "," "," "," "," "," "]
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(index, szuloElem);
    }
    $(window).on("elemKattintas", (event) => {
      console.log(event.detail);
      if (szam % 2 == 0) {
        event.detail.setELEM("X");
        this.#JatekterLista[event.detail.id]="X"
      } else {
        event.detail.setELEM("O");
      }
      szam++;
    });
  }
}
export default Jatekter;
