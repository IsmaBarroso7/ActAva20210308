function passaSeguentIBB(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id;
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }
  
  amagaElementIBB(idObjPregAct);
  mostraElementIBB(idObjPregSeg);
}

function passaAnteriorIBB(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id;
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i-1].id;
      break;
    };
  }
  
  amagaElementIBB(idObjPregAct);
  mostraElementIBB(idObjPregSeg);
}



function mostraElementIBB(idRebut){
  document.getElementById(idRebut).classList.add("elementVisibleIBB");
  document.getElementById(idRebut).classList.remove("elementOcultIBB");
}

function amagaElementIBB(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisibleIBB");
  document.getElementById(idRebut).classList.add("elementOcultIBB");
}