const jun = document.getElementById('img_jun')
const darya = document.getElementById('img_darya')
const logo = document.getElementById('img_logo')
const div = document.getElementById('div1')
const sec = document.getElementById('sec_1')
const pic = document.getElementById('pic')
const noghte = document.getElementById('noghte')
const img11 = document.getElementById('11')
const img12 = document.getElementById('12')
const img13 = document.getElementById('13')
const img14 = document.getElementById('14')
const img15 = document.getElementById('15')

window.addEventListener('scroll', () => {

    let st = window.scrollY

    console.log(st);


    if (st >= 100) {
        logo.style.opacity = '.5'
        jun.style.scale = '2'
        darya.style.scale = '1.5'
        noghte.style.opacity='1'
    } else if (st <= 100) {
        logo.style.opacity = '1'
        jun.style.scale = '1.2'
        darya.style.scale = '1.2'
        noghte.style.opacity='0'

    }
    if (st >= 300) {
        logo.style.opacity = '0'
        jun.style.scale = '2.8'

        div.style.opacity = '1'
        div.style.marginTop = '20px'
    } else if (st <= 300) {
        
        div.style.opacity = '0'
        div.style.marginTop = '60px'
    }else if(st == 300){
        logo.style.opacity = '.5'
    }
    if (st >= 400) {
        sec.style.opacity = '.5'


    }else if(st <=400){

        sec.style.opacity = '1'
        noghte.style.transform='translateX(0px)'



    }
    if (st >= 600) {
        sec.style.opacity = '0'
       

    }else if(st==600){
         
        sec.style.opacity = '.5'
       

    
    }if(st>=1000)(
        pic.style.opacity = '.5'

    )
    if(st>=1400){
        pic.style.opacity='1'
        noghte.style.transform='translateX(335px)'
    }
    if(st>=2400){
        pic.style.opacity='.5'
        noghte.style.transform='translateX(670px)'

    }else  if(st<=2400){
        pic.style.opacity='1'
        
    }
    if(st>=2600){
        img15.style.transform='translate(-500% , -500%)'
    }else if(st<=2600){
        img15.style.transform='translate(-500% , -400%)'
        
    }
    if(st>=2700){
        img11.style.transform='translate(-130% , -125%)rotate(30deg)'
        
        img13.style.transform='translate(-300% , 100%)rotate(0)'

        
    }else if(st<=2700){
      
          img11.style.transform='translate(-130% , -125%)rotate(10deg)'
          img13.style.transform='translate(-300% , -250%)rotate(360deg)'


    }
    if(st>=2800){
        img12.style.transform=' translate(130% , -125%)rotate(0)'
        img14.style.transform=' translate(266% , -302%)rotate(90deg)'
        
    }else if(st<=2800){
        img12.style.transform=' translate(130% , 75%)rotate(-90deg)'
        
        img14.style.transform=' translate(266% , -802%)rotate(0)'
    }
    if(st>=3800){
        noghte.style.transform='translateX(1010px)'

    }


})
