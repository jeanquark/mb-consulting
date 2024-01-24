
const form = document.querySelector("#form");


async function sendData() {
    // Associate the FormData object with the form element
    // console.log('form: ', form);
    const formData = new FormData(form);
    console.log('formData: ', formData);

    const abc = formData.get("message")
    console.log('abc: ', abc);


    // const phoneNumber = libphonenumber.parsePhoneNumber('(078) 123-45-678 ', 'CH')
    // console.log('phoneNumber: ', phoneNumber);
    // console.log('phoneNumber.isPossible(): ', phoneNumber.isPossible());

    // try {
    //     const response = await fetch("https://example.org/post", {
    //         method: "POST",
    //         // Set the FormData instance as the request body
    //         body: formData,
    //     });
    //     console.log(await response.json());
    // } catch (e) {
    //     console.error(e);
    // }
}

// Take over form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});


/* Phone numbers */
const phoneInput = document.getElementById('phone');
const countryInput = document.getElementById('formCountryInput');

countryInput.addEventListener("change", (event) => {
    event.preventDefault();
    console.log("change")
    console.log("event.target.value: ", event.target.value)
    switch (event.target.value) {
        case 'ch':
            console.log('select ch')
            phoneNumberMask = '+{41} ({\\0}00) 000-00-00'
            console.log('phoneNumberMask: ', phoneNumberMask);
            mask.updateOptions({ mask: phoneNumberMask });
            break;
        case 'fr':
            console.log('select fr')
            phoneNumberMask = "+{33} (000) 000-000"
            console.log('phoneNumberMask: ', phoneNumberMask);
            mask.updateOptions({ mask: phoneNumberMask });
            break;
        case 'pt':
            phoneNumberMask = '+{351}-00-000-0000'
            mask.updateOptions({ mask: phoneNumberMask });

            break;
        default:
            phoneNumberMask = '+{41} ({\\0}00) 000-00-00'
            mask.updateOptions({ mask: phoneNumberMask });


    }
});

console.log('countryInput: ', countryInput);
let phoneNumberMask = '+{41} ({\\0}00) 000-00-00'
// let phoneNumberMask
console.log('phoneNumberMask: ', phoneNumberMask);
const maskOptions = {
    mask: phoneNumberMask
};
const mask = IMask(phoneInput, maskOptions);