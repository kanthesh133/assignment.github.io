// FAQ 


// form validation



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// testimonials

// When the DOM is ready, run this function
$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});



// dom manipulation



const phase = document.querySelector('.phase');
const phase1 = document.querySelector('.phase1');

const details_arr = [{
        img: './assets/images/doctors.png',
        name: 'Dr.Vijay Agarwal',
        qualification: 'MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology',
        description: ' Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.',
    },
    {
        img: './assets/images/doctors.png',
        name: 'Dr.Vijay Agarwal',
        qualification: 'MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology',
        description: ' Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.'
    }

]


const Pediatric = details_arr.map((el) => {
    return `
    <div class="doctor1 ">
        
        <div class="col-sm-12 list ">
            <img src=${el.img} class="doctor-pic " alt="Doctor pic " />
            <h4> <strong>${el.name} </strong></h4>
            <p class="desc ">${el.qualification} 
            </p>

            <div class="line "></div>
                <p class="description ">${el.description}     </p>
                <a href="# " class="btn text-center ">Know More</a>
            </div>
        </div>
    </div>`
})


const Adult = details_arr.map((el) => {
    return `
            <div class="doctor1 ">
                
                <div class="col-sm-12 list ">
                    <img src=${el.img} class="doctor-pic " alt="Doctor pic " />
                    <h4> <strong>${el.name} </strong></h4>
                    <p class="desc ">${el.qualification} 
                    </p>

                    <div class="line "></div>
                        <p class="description ">${el.description}     </p>
                        <a href="# " class="btn text-center ">Know More</a>
                    </div>
                </div>
            </div>
    `
})
phase.insertAdjacentHTML('afterbegin', Pediatric)
phase1.insertAdjacentHTML('afterbegin', Adult)





// mapping icons

const icons_square = document.querySelector('.icons-square');

const icon_array = [
    { logo: "./assets/images/icon10.png", details: "Repeated abscess formation (liver abscess brain abscess)" },



]


const icons_phase = icon_array.map((el, index) => {
    return `
    <div class="card col-sm-6">
            <div class="card-header ">
                <img src=${el.logo}   width="31px" height="25px" />
            </div>
            <div class="card-body para">
                <p>${el.details}</p>
            </div>
        </div>`
})
icons_square.insertAdjacentHTML('afterbegin', icons_phase);