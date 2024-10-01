function appendToDisplay(value){
    document.getElementById('display').value += value;

}

function calculate(){
    try{
        document.getElementById('display').value = eval(document.getElementById('display').value);

    }catch (error){
        document.getElementById('display').value = 'Error';

    }
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function deleteLast(){
    let currentDisplay = document.getElementById('display').value;
    document,getElementById('display').value = currentDisplay.slice(0, -1);
}