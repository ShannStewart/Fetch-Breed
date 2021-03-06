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
        dogBreed = $('input[name="breed"]').val();
        dogBreed = dogBreed.toLowerCase();
        console.log("dogBreed is: " + dogBreed);

        arrayAPI(dogBreed);
    });
}

function arrayAPI(breed){
    console.log("arrayAPI ran");

    let breedLink = "https://dog.ceo/api/breed/" + breed + "/images/random"; 

   console.log("breedLink: " + breedLink)

   
        fetch(breedLink)
        .then(response => response.json())
        .then(responseJSON => {
            if (responseJSON.status == 'error'){
                alert('Not a valid dog breed');
            }
            else{
                getDogImage(responseJSON);
            }
        })
        .catch(error => alert('error! danger!'));


}

function getDogImage(dogMessage){

    console.log("message: " + dogMessage.message);

    let newDogMessage = "<img src='" + dogMessage.message + "' class='dogPic'>";
    console.log("dog message: " + newDogMessage);

    $('.dogDisplay').append(
        newDogMessage
      );

    readyFunctions();
}

$(readyFunctions);