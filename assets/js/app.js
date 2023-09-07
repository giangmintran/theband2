const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// Hàm hiển thị BuyTickets
function showBuyTickets() {
    modal.classList.add('open');
            
}
//Hàm ẩn buy tickets
function hideBuyTickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}

modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

var headerElement = document.getElementById('header');

var mobileMenuElement = document.getElementById('mobile-menu');

var headerHeight = headerElement.clientHeight;

//Đóng mở mobile menu

mobileMenuElement.onclick = function (){
    var isClosed = headerElement.clientHeight === headerHeight;
    if (isClosed){
        headerElement.style.height = 'auto';
    }
    else {
        headerElement.style.height = null;
    }
}

// Tự động đóng menu khi chọn 1 phần tử

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i =0; i < menuItems.length ; i++){
    var menuItem = menuItems[i];
    console.log(menuItem.nextElementSibling)

    menuItem.onclick = function(e){
        var isMenuNextSibling = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isMenuNextSibling){
            e.preventDefault();
        }else{
            headerElement.style.height = null;
        }
        
    }
}






        