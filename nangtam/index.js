var dieuhuong_item = document.querySelectorAll('.best_seler .dieuhuong_item')
var img_item = document.querySelectorAll('.attraction ')





dieuhuong_item.forEach((e, i) => {

    e.onclick = () => {
        img_item.forEach(ee => {
            ee.classList.add('hiden')
        })
        dieuhuong_item.forEach(ee => {
            ee.classList.remove('activee')
        })
        img_item[i].classList.remove('hiden')
        e.classList.add('activee')
    }
})

var xuatgoai = document.querySelectorAll('.xuatgoai .dieuhuong_item')
var xuatngoai = document.querySelectorAll('.xuatngoai ')


var addacc = (e) => {
    e.classList.add('active')
}
var removeacc = (e) => {
    e.classList.remove('active')
}
var addhiden = (e) => {
    e.classList.add('hiden')
}
var removehiden = (e) => {
    e.classList.remove('hiden')
}






var xuatgoai = document.querySelectorAll('.xuatgoai .dieuhuong_item')
var xuatngoai = document.querySelectorAll('.xuatngoai ')


xuatgoai.forEach((e, i) => {

    e.onclick = () => {
        xuatngoai.forEach(ee => {
            addhiden(ee)
        })
        xuatgoai.forEach(ee => {
            removeacc(ee)
        })
        removehiden(xuatngoai[i])
        addacc(e)
    }

})


var tour_theme = document.querySelectorAll('.tour_theme .dieuhuong_item')
var theme = document.querySelectorAll('.theme ')


tour_theme.forEach((e, i) => {

    e.onclick = () => {
        theme.forEach(ee => {
            addhiden(ee)
        })
        tour_theme.forEach(ee => {
            removeacc(ee)
        })
        removehiden(theme[i])
        addacc(e)
    }

})

var allwould = document.querySelectorAll('.allwould .dieuhuong_item')
var would = document.querySelectorAll('.would ')


allwould.forEach((e, i) => {

    e.onclick = () => {
        would.forEach(ee => {
            addhiden(ee)
        })
        allwould.forEach(ee => {
            removeacc(ee)
        })
        removehiden(would[i])
        addacc(e)
    }

})