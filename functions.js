

const calz = () => {
    let total = document.getElementById("total-bill").value;
    let currency = document.getElementById("currency").value;
    let service = document.getElementById("service").value;
    let shareCost = document.getElementById("share-cost").value;
    let showTip = document.getElementById("show-tip");
    let each = document.getElementById("each");
    
    if (total === "" || total === 0 || total < 100){
        alert("Alaye put in Your Bill jare")
    }
    if (service == 0){
        alert("Sir, no allow me deck you, how was my service?")
    }
    if(shareCost === "" || shareCost < 1){
       shareCost = 1;
    }
    if (shareCost > 1){
        each.innerText = "each"
    }else{
        each.innerText = "Sir"
    }
     

    const  tip = (total * service)/shareCost;
     showTip.innerText =currency + tip
    console.log(tip)
   }