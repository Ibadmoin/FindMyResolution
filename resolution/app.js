function updateResolution(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    document.getElementById('resolution').innerHTML = width + 'x'+ height;

}
window.addEventListener('resize',updateResolution);
updateResolution();