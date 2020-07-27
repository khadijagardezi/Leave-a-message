// Immediately invoked functional expression!

// This keeps everything in a tidy little package that is inaccessible 
// to the outside world,but very easy to share variables and functions inside of.

(function() 
{
    //Select the input element

    const form = document.querySelector('.message-form')

    //Set up Submit Button

    form.addEventListener('click', function(e){

        // prevent the form's default submission action

        e.preventDefault()

        //user's input from form

        const message = document.querySelector('#message');
        const feedback = document.querySelector('.feedback');
        const messageContent = document.querySelector('.message-content');
    // condition :
        if (message.value === ''){
            feedback.classList.add('show');
            } 
        else {

            //Change message content 

            messageContent.textContent = message.value;

            //and clear the message input
            message.value = '';
        }
})
    })();
    