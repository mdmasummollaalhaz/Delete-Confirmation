document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none'
})

// Focus
document.getElementById('delete-confirm').addEventListener('focus', function(){
    // document.getElementById('secret-info').style.display = 'none'
    // console.log('Focused');

    document.body.style.backgroundColor = 'lightcoral'
    
})

// Blur
document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white' 
})

// KeyDown
/* document.getElementById('delete-confirm').addEventListener('keydown', function(){
    // console.log('keydown');
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value); 
}) */


// Keypress
/* document.getElementById('delete-confirm').addEventListener('keypress', function(){
    // console.log('keydown');
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value); 
}) */


// Keyup
/* document.getElementById('delete-confirm').addEventListener('keyup', function(){
    // console.log('keydown');
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value); 
}) */


// Delete confirm
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('delete-btn');
    if(event.target.value == 'Delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled', true)
    }

})
// Change
document.getElementById('delete-confirm').addEventListener('change', function(){
    // console.log('keydown');
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value); 
})