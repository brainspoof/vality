
// const firebaseConfig = {
//     apiKey: "AIzaSyBX-opolrVfn4I5FfLAD1F250J59AanMec",
//     authDomain: "vality-shubham.firebaseapp.com",
//     projectId: "vality-shubham",
//     storageBucket: "vality-shubham.appspot.com",
//     messagingSenderId: "933626859942",
//     appId: "1:933626859942:web:9b8d0212738d4960fc3f67",
//     measurementId: "G-XFSB69ENPC"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// function postEmail(){
//     let cloudDB = firebase.firestore();
//     cloudDB.collection("emails").doc(document.querySelector("#email").value).set(
//         {
//             name: document.querySelector("#name").value,
//             email: document.querySelector("#email").value,
//         }
//     )
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id)
//     })
// }

// IP ADDRESS
// https://www.cloudflare.com/cdn-cgi/trace
// http://www.geoplugin.net/json.gp
// https://api.hackertarget.com/geoip/?q=59.99.157.96
// https://ipapi.co/json/
// http://ip-api.com/json

// Discover Text

function percentCompleted(n, min, max){
    let a = n - min;
    let percent = a*100/(max-min)

    return percent < 100 && percent > 0 ? percent : percent < 0 ? 0 : 100;
}

window.addEventListener('scroll', () => {
    const scrollpos = this.scrollY;
    const discoverStart = 130;
    const discoverEnd = 500;
    const ele = document.querySelector(".go-down");
    const root = document.querySelector(":root");

    let percent = percentCompleted(scrollpos, discoverStart, discoverEnd);
    if(percent == 0){
        ele.classList.add("godown-hover-animation");
        ele.classList.remove("change-into-discover-header");
    }

    else if(percent == 100){
        // ele.classList.remove("godown-hover-animation");
        // ele.classList.add("change-into-discover-header");
    }

    else{
        ele.classList.remove("godown-hover-animation");
        ele.classList.add("change-into-discover-header");

        root.style.setProperty('--discover-delay', `${-3*percent/100}s`);
    }

})