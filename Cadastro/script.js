document.addEventListener('DOMContentLoaded', function(){
    loadItems();

    document.getElementById('add-form').addEventListener('submit', function(event){
        event.preventDefault();
        addItem();
    });
});

function loadItems(){
    fetch('server.php?action=get_items')
    .then(response => response.json())
    .then(data => {
        const itemList = document.getElementById('item-list');
        itemList.innerHTML = '';
        data.array.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - Quantidade: ${item.quantidade} - Preço: R$ ${item.preco}`;
            itemList.appendChild(li);
        });
    });
}

function addItem(){
    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    fetch('server.php?action=add_item', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json', 
        }, 
        body: JSON.stringify({nome, quantidade, preco}),
    })
    .then(response => response.json())
    .then(data => {
        if(data.sucess){
            loadItems();
            document.getElementById('add-form').reset();
        }else{
            alert('Error ao adcionar item.')
        }
    })
}