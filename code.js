
//----MAIN-FORM SECTION (VALIDATION)

// const name = document.getElementById("user-name");
// const email = document.getElementById("user-email");
// const comentArea = document.getElementById("coment-area");
// const formValid = document.querySelector(".form__valid");
// const buttonSend = document.querySelector(".form__btn-send");

// buttonSend.addEventListener("click", (e)=>{
//     e.preventDefault();
//     let errror = validarCampos();
// })

// const validarCampos=()=>{
    
// }


//----SERVICES-OPTION (SELECT)

const optionSelected = document.getElementById('option-selected');
const serviceImage = document.querySelector('.service-image');
const serviceName = document.querySelector('.service-name');
const serviceDescription = document.querySelector('.service-description');
const serviceSpecs = document.querySelector('.service-specs');

const serviceData = {

    servicio1:{
        imgSrc: '../img/telecomunicaciones-slider-1.jpg',
        name: 'Servicio 1',
        description: 'Esta es la descripcion del primer servicio se va a comppletar con lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam commodi incidunt delectus cumque excepturi.',
        specs: "<b>Especificaciones:</b> Aqui son las especificaciones del servicio 1"
    },
    servicio2:{
        imgSrc: '../img/telecomunicaciones-slider-2.jpg',
        name: 'Servicio 2',
        description: 'Esta es la descripcion del segundo servicio se va a comppletar con lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam commodi incidunt delectus cumque excepturi.',
        specs: "<b>Especificaciones:</b> Aqui son las especificaciones del servicio 2"
    },
    servicio3:{
        imgSrc: '../img/telecomunicaciones-slider-3.jpg',
        name: 'Servicio 3',
        description: 'Esta es la descripcion del tercer servicio se va a comppletar con lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam commodi incidunt delectus cumque excepturi.',
        specs: "<b>Especificaciones:</b> Aqui son las especificaciones del servicio 3"
    },
    servicio4:{
        imgSrc: '../img/trabajador-telecomunicaciones-1.jpg',
        name: 'Servicio 4',
        description: 'Esta es la descripcion del cuarto servicio se va a comppletar con lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam commodi incidunt delectus cumque excepturi.',
        specs: "<b> Especificaciones: </b> Aqui son las especificaciones del servicio 4"
    },
    servicio5:{
        imgSrc: '../img/trabajador-telecomunicaciones-2.jpg',
        name: 'Servicio 5',
        description: 'Esta es la descripcion del quinto servicio se va a comppletar con lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam commodi incidunt delectus cumque excepturi.',
        specs: "<b>Especificaciones:</b> Aqui son las especificaciones del servicio 5"
    },
    servicio6:{
        imgSrc: '../img/Temwok_Fondo_video_2.png',
        name: 'Servicio 6',
        description: 'Esta es la descripcion del sexto servicio se va a comppletar con lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam commodi incidunt delectus cumque excepturi.',
        specs: "<b>Especificaciones:</b> Aqui son las especificaciones del servicio 6"
    },
}

optionSelected.addEventListener("change", ()=>{

    const selectedValue = optionSelected.value;

    if(serviceData[selectedValue]){
        serviceImage.style.backgroundImage = `url(${serviceData[selectedValue].imgSrc})`;
        serviceImage.style.display = 'block';
        serviceName.textContent = serviceData[selectedValue].name;
        serviceDescription.textContent = serviceData[selectedValue].description;
        serviceSpecs.innerHTML = serviceData[selectedValue].specs;
    }else{
        serviceImage.style.display = 'none';
        serviceName.textContent = '';
        serviceDescription.textContent = '';
        serviceSpecs.textContent = '';
    } 
});

//----NAV BAR HEADER (CLICKED)

//----CHECKBOX HEADER (CLICKED)


const headerOpenMenu = document.querySelector('.header__open-menu');
const iconMenu = document.querySelector('.icon-menu');

headerOpenMenu.addEventListener('click', ()=>{
    iconMenu.classList.toggle('icon-menu-hidden');
})