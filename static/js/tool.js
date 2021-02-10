const btn = document.getElementsByClassName('btn btn-lang-selector');
const policy = document.getElementById("policy");
btn[0].onclick = function(){
    console.log('切换到了Japanese');
    policy.src = "../../policy.html";
}
btn[1].onclick = function(){
    console.log('切换到了English');
    policy.src = "../../policy.html";
}
btn[2].onclick = function(){
    console.log('切换到了Chinese');
    policy.src = "../../隐私政策.html";
}
onload = function () {
  if(window.location.href.includes("-cn")) {
    console.log('中文')
    policy.src = "../../隐私政策.html";
  }else{
    console.log('英文或日文')
    policy.src = "../../policy.html";
  }
}
