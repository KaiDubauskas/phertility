
document.addEventListener("DOMContentLoaded", (event) => {
    const app = firebase.app();
    console.log(app);
  
  });
  

  
function updateMessage() {
    const db = firebase.firestore();

    for(let x in jsonPolicy) {
      db.collection("policies").doc(x).set({
        policy: jsonPolicy[x]
    })
    }
  }