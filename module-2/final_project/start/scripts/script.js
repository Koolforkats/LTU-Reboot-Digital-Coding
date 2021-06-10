let arrButtons = document.querySelectorAll('.filter');
let arrImages = document.querySelectorAll('.animal');

console.log(arrButtons);
console.log(arrImages);

for(counter=0; counter < arrButtons.length; counter++){
    let currentButton = arrButtons[counter];
    currentButton.addEventListener('click',function(){
        let animalToShow = this.getAttribute('animal');
        console.log(animalToShow);     
        
        for(imageCounter=0; imageCounter < arrImages.length; imageCounter++){
            let currentImage = arrImages[imageCounter];
            //console.log(currentImage);
            currentImage.parentNode.style.display = 'none';
            if(animalToShow == 'all'){
                currentImage.parentNode.style.display = 'block;'
            }
            if(currentImage.classList.contains(animalToShow)){
                currentImage.parentNode.style.display = 'block';
            }
            else{
                currentImage.parentNode.style.display = 'none';
            }
            if(animalToShow == 'all'){
                currentImage.parentNode.style.display = 'block';
            }


        }
    });
}