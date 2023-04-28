class Elem {
  //privát adattag
  constructor(id, szuloElem) {
    this.id = id;
    szuloElem.append(`
          <div class="elem">
              <h1></h1>
          </div>
      `);
    this.elem = $("article div:last-child");
    this.alapot = true;
    this.h1Elem = this.elem.children("h1");
    this.elem.on("click", () => {
    if(this.alapot){
      this.esemenyTrigger();
    }
      this.alapot = false;
    });
  }

  setELEM(ertek) {
    this.h1Elem.html(ertek);
  }

  esemenyTrigger() {
    console.log("trigger", this.id);
    const esemeny = new CustomEvent("elemKattintas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Elem;
