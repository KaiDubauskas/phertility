
document.addEventListener("DOMContentLoaded", (event) => {
    const app = firebase.app();
    console.log(app);
  
  });
  

  
function updateMessage() {
    const db = firebase.firestore();


    let i = 0;
    for(let x in jsonPolicy) {
      db.collection("policies").doc(x).set({
        policy: jsonPolicy[x],
        abortionRate: abortionRates[i],
        totalAbortion: totalAbortions[i],
        percentageAborted: percentAborted[i],
        noOfFacilities: facilityNumber[i]
    })
      i = i+1;
    }
    console.log("test");
  }