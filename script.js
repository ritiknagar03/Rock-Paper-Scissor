const userChooice = document.querySelectorAll('.user-choice');
const userOutput = document.querySelector('.user');
const resultBox = document.querySelector('.result');

userChooice.forEach(choice =>{
    choice.addEventListener('click', ()=>{
        const value = choice.querySelector('.option').textContent;
        userOutput.innerHTML = value;                
        computerChoice();
        setTimeout(()=>{
            checkWinner()
        }, 2000);
    })
});

function computerChoice(){
    const options = ['🤛', '🫲', '✌️'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    document.querySelector('.computer').innerHTML =  '';
    document.querySelector('.computer').innerHTML =  '🤔';
    resultBox.innerHTML = '';
    resultBox.innerHTML = 'Computer Turns!';
    setTimeout(()=>{
        document.querySelector('.computer').innerHTML =  '';
        document.querySelector('.computer').innerHTML =  choice;
    }, 1000);
}

function checkWinner(){
    if(userOutput.textContent === '🤜' && document.querySelector('.computer').textContent === '✌️'){
        resultBox.innerHTML = '';
        resultBox.innerHTML = 'You Won!';
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🎉';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🥺';
    }else if(userOutput.textContent === '🫱' && document.querySelector('.computer').textContent === '🤛'){
        resultBox.innerHTML = '';
        resultBox.innerHTML = 'You Won!';
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🎉';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🥺';
    }else if(userOutput.textContent === '✌️' && document.querySelector('.computer').textContent === '🫲'){
        resultBox.innerHTML = '';
        resultBox.innerHTML = 'You Won!';
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🎉';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🥺';
    }else if(userOutput.textContent === '🤜' && document.querySelector('.computer').textContent === '🤛'){
        resultBox.innerHTML = '';
        resultBox.innerHTML = "It's a draw!";
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🫡';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🫡';
    }else if(userOutput.textContent === '🫱' && document.querySelector('.computer').textContent === '🫲'){
        resultBox.innerHTML = '';
        resultBox.innerHTML = "It's a draw!";
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🫡';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🫡';
    }else if(userOutput.textContent === '✌️' && document.querySelector('.computer').textContent === '✌️'){
        resultBox.innerHTML = '';
        resultBox.innerHTML = "It's a draw!";
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🫡';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🫡';
    }else{
        resultBox.innerHTML = '';
        resultBox.innerHTML = 'You Loose!';
        userOutput.innerHTML = '';
        userOutput.innerHTML = '🥺';
        document.querySelector('.computer').innerHTML = '';
        document.querySelector('.computer').innerHTML = '🎉';
    }
}