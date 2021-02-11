(function(){

    // const buttons = document.querySelectorAll('.btn');
    // const storeItems = document.querySelectorAll('.store-item');

    // //console.log(buttons);
    // buttons.forEach(function(button){
    //     button.addEventListener('click', function(e){
    //         e.preventDefault();
    //         const filter = e.target.dataset.filter;

    //         if(filter ==='all'){
    //             storeItems.forEach(function(item){
    //                 item.style.display = 'block';
    //             });
    //         }else if(filter ==='cakes'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('cakes'))
    //                 {
    //                     item.style.display = 'block';
    //                 }else{
    //                     item.style.display = 'none';
    //                     }
    //             });
    //         }else if(filter ==='cupcakes'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('cupcakes'))
    //                 {
    //                     item.style.display = 'block';
    //                 }else{
    //                     item.style.display = 'none';
    //                     }
    //             });
    //         }else if(filter ==='doughnuts'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('doughnuts'))
    //                 {
    //                     item.style.display = 'block';
    //                 }else{
    //                     item.style.display = 'none';
    //                     }
    //             });
    //         }else if(filter ==='sweets'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('sweets'))
    //                 {
    //                     item.style.display = 'block';
    //                 }else{
    //                     item.style.display = 'none';
    //                     }
    //             })
    //         }
    //     })
    // });

    /// Optim version
    const buttons = document.querySelectorAll('.btn');
    const storeItems = document.querySelectorAll('.store-item');

     buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItems.forEach((item) => {
            if(filter ==='all'){
                    item.style.display = 'block';
            }else{
                if(item.classList.contains(filter)){
                    item.style.display='block';
                }else{
                    item.style.display = 'none';
                }
            }

        });
    });
});

})();

(function(){
    const searchBox = document.querySelector('#search-item');
    //const searchBox = document.getElementById('#search-item');
    const storeItems = document.querySelectorAll('.store-item');

    searchBox.addEventListener('keyup', (e) => {
        // console.log('Event: ' + JSON.stringify(e, null, 4));
        const searchFilter = e.target.value.toLowerCase().trim();
        // console.log(searchFilter);
        // console.log(' Value from : ' + searchBox.value.toLowerCase());
        storeItems.forEach((item) => {
            if(item.textContent.includes(searchFilter)){
                item.style.display = 'block';
            }else{
                item.style.display='none';
            }
        });
    });

})();

(function(){
    
    const storeItems = document.querySelectorAll('.store-item');
    const lightBox = document.querySelector('.lightbox-container');
    const lightBoxItem = document.querySelector('.lightbox-item');
    const images = document.querySelectorAll('.store-img');

    let imageList = [];
    let imageCounter = 0;

    images.forEach((image) => {
        imageList.push(image.src);
    });
   // console.log(imageList);

   images.forEach(function (item){
    item.addEventListener('click', function(e) {
        let image = e.target.src;
        // console.log(JSON.stringify(image, null, 4));
        // console.log(image);
        lightBoxItem.style.backgroundImage = `url(${image})`;
        lightBox.classList.add('show');
        imageCounter = imageList.indexOf(image);
        console.log(lightBox.classList);
    });
   });

   let btnLeft = document.querySelector('.btnLeft');
   btnLeft.addEventListener('click', function(){
       imageCounter--;
       if(imageCounter < 0){
           imageCounter = imageList.length - 1;
       }
       lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
        console.log(`url(${imageList[imageCounter]})`);
   });

   let btnRight = document.querySelector('.btnRight');
   btnRight.addEventListener('click', function(){
       imageCounter++;
       if(imageCounter >= imageList.length){
           imageCounter = 0;
       }
       lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
       console.log('right');
   });

// for close btn
let lightBoxClose = document.querySelector('.lightbox-close');
lightBoxClose.addEventListener('click', function(){
    lightBox.classList.remove('show');
}); 


})();