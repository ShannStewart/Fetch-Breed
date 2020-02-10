    function readyFunctions(){
    console.log("readyFuntions ran")
    getBreed();
}

async function getBreed(){
    console.log("getBreed ran")

    await $('.getDogs').off('click');

    await $('.getDogs').on('click', '.puppyButton', function(event){
        event.preventDefault();
    $('.dogDisplay').empty();
        console.log("Display emptied");
        dogBreed = $('input[name="breed"]:checked').val();
        // = $('.puppyNumber').val();
        console.log("dogBreed is: " + dogBreed);

        arrayAPI(dogBreed);
    });
}

async function arrayAPI(breed){
   // console.log("arrayAPI ran");

   // let breedLink = 

   //console.log(breedLink)

   // for (i=0; i<dogNumber; i++){
   //     await fetch('https://dog.ceo/api/breeds/image/random')
   //     .then(response => response.json())
   //     .then(responseJSON => dogPool.push(responseJSON))
   //     .catch(error => alert('error! danger!'));
   // }

  //  console.log(dogPool);
  //  console.log("length of dogpool: " + dogPool.length);

  //  $('.dogDisplay').append(
  //      "<div class='dogTable'></div>"
  //  );

   //         dogImage = getDogImage(dogPool[i].message);
   //         console.log("dog image: " + dogImage);

   //         $(rowName).append(
   //             dogImage
    //        );
        

    readyFunctions();
}

function getDogImage(dogMessage){
    let newDogMessage = "<img src='" + dogMessage + "' class='dogPic'>";
    console.log("dog message: " + newDogMessage);
    return newDogMessage;
}

$(readyFunctions);