let item_ids = ["item1", "item2", "item3"];

function class_remover(element){
    element.classList.remove("carousel-item-next-adjusted");
    element.classList.remove("carousel-item-prev-adjusted");
}

function Carousel_program(direction) {
    let i;
    for(i of item_ids){
        var temp = document.getElementById(i);
        class_remover(temp);
    }
    if(direction == "right"){
        item_ids.push(item_ids.shift());
    }else{
        item_ids.unshift(item_ids.pop());
    }
    var changer = document.getElementById(item_ids[1]);
    changer.classList.add("carousel-item-next-adjusted");
    changer = document.getElementById(item_ids[2]);
    changer.classList.add("carousel-item-prev-adjusted");
}