 const tabItems=document.querySelectorAll('.tab-item');
 const tabContentItems=document.querySelectorAll('.tab-content-item');
function selectItem(){
    removeBorder();
    removeShow();
    this.classList.add("tab-border");
    // Grab contetn item from DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item =>{
        item.classList.remove("tab-border")
    })
}
function removeShow(){
    tabContentItems.forEach(item =>{
        item.classList.remove("show")
    })
}
 tabItems.forEach(item => {
     item.addEventListener("click",selectItem)
 })