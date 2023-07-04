let counter = 0;
//We are starting our JS file with a counter, which means that we are starting our card selection process at 0. This will be important 
//when we get to line 13.
let firstSelection = "";
//This variable will hold our first selection of cards see line 15.
let secondSelection = "";
//This variable will hold the second selection see line 21.

const cards = document.querySelectorAll(".cards .card"); //The querySelectorAll() method returns all elements that matches a CSS selector(s). This is connecting JS to CSS elements .cards .card// Question, why is the container div ".cards" selected along with ".card", why is ".card" not selected by itself?
cards.forEach((card) => { ////The forEach() method executes a provided function once for each array element.
    card.addEventListener("click", () => {//.addEventListener is adding an 'event' to the element .card each time the event of clicking occurs on the card. 
        //console.log(true);// This is testing the above function to show in the console that the card is being selected.
        card.classList.add("clicked");// This enables a new class "clicked" to be added once that card is clicked.

        if (counter === 0) {//We are now making an if condition, counter === 0 means we haven't selected any of the cards. Nothing has been counted 
            firstSelection = card.getAttribute("place"); //firstSelection is a variable we made on line 2. 
            //It stores each first selection that the user does of the cards. In this case we want the selection to recognize the attribute we placed on each card. 
            //The attributes name is "place."
            counter++;//   (After researching this, The increment operator ( ++ ) increments its operand by 1 ; that is, it adds 1 to the existing value. So if we select a card, it allows us to select one more. 
        } else {
            secondSelection = card.getAttribute("place");
            counter = 0;    // Since there is no increment operator it finishes the ability for counting another card.
            //console.log(firstSelection);
            //console.log(secondSelection);
            //At this stage in the Javascript our game can now select two cards.
            //But now we need to check after the second selection if they are both
            //equal or not. 

            if (firstSelection === secondSelection) {
                const correctCards = document.querySelectorAll(
                    ".card[place='" + firstSelection + "']"
                );

                //here we have created a variable 'correctCards.' It's value
                // is the attribute(place) of the firstSelection === to the secondSelection. ie img: Kever_Rachel, <p> Kever_Rachel

                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked")
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
                // Above we have now a new variable called correctCards which is listed as an array, the first attribute (0), and the second (0).
                //Since it is a match, the classList.add("clicked") from line 9 
                //needs to be changed to classList.remove("checked")
            } else {
                const incorrectCards = document.querySelectorAll(".card.clicked");
                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");

                setTimeout(() => {
                    incorrectCards[0].classList.remove("shake");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("shake");
                    incorrectCards[1].classList.remove("clicked");
                }, 2000);
                //Above we have an incorrect match, when two incorrect cards are selected they
                //have the class "clicked", now we are adding a .classList.add("shake")
                //which will allow us to add CSS animation into the incorrect cards.
                //The 2000 represents the 2000 miliseconds. That the animation will last.  
            }
        }
    });

});
