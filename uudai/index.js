var navv = document.querySelectorAll('.bay .dieuhuong_item')
var item = document.querySelectorAll('.bay .qc_list')

navv.forEach((e, i) => {
    console.log(e);
    e.onclick = () => {
        item.forEach(ee => {
            ee.classList.add('hiden')
        })
        navv.forEach(ee => {
            ee.classList.remove('active')
        })
        item[i].classList.remove('hiden')
        e.classList.add('active')
    }
})