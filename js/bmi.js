const nameEl = document.querySelector("#name");
const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const calcEl=document.querySelector("#calc");
const bmiEl=document.querySelector("#result .bmi");
const commentEl=document.querySelector("#result .comment");

console.log(nameEl,weightEl,heightEl,calcEl);

calcEl.addEventListener("click", () =>{
    let name = nameEl.value;
    let weight = Number(weightEl.value);
    let height = Number(heightEl.value);
    // if (isNaN(weight) || isNaN(height)){
    //     alert("輸入錯誤");
    //     return;
    // }
    let bmi = getBmi(height, weight);
    if (bmi == Infinity || isNaN(bmi)){
        alert("輸入錯誤");
        return;
    }
    let comment = "";
    if (bmi < 18.5){
        comment = "體重過輕";
    } else if (bmi >= 18.5 && bmi < 24){
        comment = "標準身材";
    } else if (bmi >= 24 && bmi < 27){
        comment = "體重過重";
    }else {
        comment = "請開始減肥";
    }

    // alert(`${name} bmi=${bmi}`);
    console.log(bmi);
    bmiEl.innerText = bmi;
    commentEl.innerText = comment;
});

function getBmi(height, weight, point = 2){
    return (weight / (height / 100)** 2).toFixed(point);
}