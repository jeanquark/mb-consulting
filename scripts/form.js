
const form = document.querySelector("#form");

const notifications = document.getElementsByClassName("notification");

form.addEventListener('input', function (event) {
    // console.log('change event: ', event);
    // console.log('change event.target.id: ', event.target.id);
    if (event.target.value != '') {
        event.target.classList.add("contains-value")
    } else {
        event.target.classList.remove("contains-value")
    }
})

async function sendData() {
    // console.log('notifications: ', notifications);
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].classList.add("hidden");
    }

    const formData = new FormData(form);
    console.log('formData: ', formData);

    const abc = formData.get("message")
    console.log('abc: ', abc);

    const sendMessageButton = document.getElementById("sendMessageButton")
    sendMessageButton.setAttribute('disabled', '');
    // sendMessageButton.children[0].classList.remove("hide")
    // console.log('sendMessageButton.currentTarget: ', sendMessageButton.currentTarget);



    // document.querySelector(".message.success").classList.remove("hidden");
    // form.reset()
    // sendMessageButton.removeAttribute('disabled');


    try {
        const reCaptchaValue = grecaptcha.getResponse()
        console.log('reCaptchaValue: ', reCaptchaValue);
        if (reCaptchaValue.length < 1) {
            document.querySelector(".message.warning").classList.remove("hidden");
            return
        }

        const response = await fetch("https://formspree.io/f/xvoeqkkw", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('response: ', response);
        if (response.ok) {
            document.querySelector(".message.success").classList.remove("hidden");
            form.reset();
        } else {
            throw 'send_error'
        }

    } catch (e) {
        console.error(e);
        document.querySelector(".message.error").classList.remove("hidden");

    } finally {
        sendMessageButton.removeAttribute('disabled');
    }
}

// Take over form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});

// Close all notifications
for (let i = 0; i < notifications.length; i++) {
    notifications[i].addEventListener('click', () => {
        document.querySelector(".message.success").classList.add("hidden");
        document.querySelector(".message.error").classList.add("hidden");
    });
};

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
            phoneNumberMask = '+{41} 000 000 00 00'
            console.log('phoneNumberMask: ', phoneNumberMask);
            mask.updateOptions({ mask: phoneNumberMask });
            break;
        case 'fr':
            console.log('select fr')
            phoneNumberMask = "+{33} 000 000 000"
            console.log('phoneNumberMask: ', phoneNumberMask);
            mask.updateOptions({ mask: phoneNumberMask });
            break;
        case 'pt':
            phoneNumberMask = '+{351} 00 000 0000'
            mask.updateOptions({ mask: phoneNumberMask });

            break;
        default:
            phoneNumberMask = '+{41} 000 000 00 00'
            mask.updateOptions({ mask: phoneNumberMask });
    }
});

// console.log('countryInput: ', countryInput);
let phoneNumberMask = '+{41} 000 000 00 00'
// let phoneNumberMask
// console.log('phoneNumberMask: ', phoneNumberMask);
const maskOptions = {
    mask: phoneNumberMask
};
const mask = IMask(phoneInput, maskOptions);