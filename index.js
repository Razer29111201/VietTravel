var datve = document.querySelectorAll('.datve_item')
var detail = document.querySelectorAll('.detail_item')
var adult = document.querySelector('.adult')
var children = document.querySelector('.children')
var baby = document.querySelector('.baby')
var babyid = document.querySelector('#baby')
var childrenid = document.querySelector('#children')
var adultid = document.querySelector('#adult')
var detailpeople = document.querySelector('.detail_people p')
var people_chose = document.querySelector('.people_chose')
var detail_chose = document.querySelector('.detail_chose')
var type_chose = document.querySelector('.type_chose')
var chose_text = document.querySelector('.chose_text')
var type_item = document.querySelectorAll('.type_chose-item p')
var dieuhuong_item = document.querySelectorAll('.b .dieuhuong_item')
var img_item = document.querySelectorAll('.b .img_item')

datve.forEach((e, i) => {
    e.onclick = () => {
        detail.forEach(e => {
            e.classList.add('hiden')
        })
        detail[i].classList.remove('hiden')
    }
})

adultid.onchange = (e) => {
    adult.innerText = e.target.value
}
childrenid.onchange = (e) => {
    children.innerText = e.target.value
}
babyid.onchange = (e) => {
    baby.innerText = e.target.value
}
detailpeople.onclick = () => {
    people_chose.classList.toggle('hiden')
    console.log(people_chose)
}
detail_chose.onclick = () => {
    type_chose.classList.toggle('hiden')
    console.log(people_chose)
}
type_item.forEach(e => {
    e.onclick = () => {
        chose_text.innerText = e.innerHTML
    }
})

dieuhuong_item.forEach((e, i) => {

    e.onclick = () => {
        img_item.forEach(ee => {
            ee.classList.add('hiden')
        })
        dieuhuong_item.forEach(ee => {
            ee.classList.remove('active')
        })
        img_item[i].classList.remove('hiden')
        e.classList.add('active')
    }
})