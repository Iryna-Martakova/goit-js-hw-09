// let formData = { email: "", message: "" };
// const lsKey = "feedback-form-state";

// const form = document.querySelector(".feedback-form");
// const emailInput = form.querySelector('input[name="email"]');
// const messageTextarea = form.querySelector('textarea[name="message"]');

// formData.value = localStorage.getItem(lsKey) ?? "";

// form.addEventListener("input", (event) => {
//     const { name, value } = event.target;
//     formData[name] = value;
//     try {
//         localStorage.setItem(lsKey, JSON.stringify(formData));
//     } catch (error) {
//         alert("Error");
//     }
// });

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     if (!formData.email || !formData.message) {
//         alert("Fill please all fields");
//         return;
//     }

//     console.log("User data:", formData);
//     localStorage.removeItem(lsKey);
//     formData = { email: "", message: "" };
//     form.reset();
// });


let formData = {
    email: "",
    message: ""
};
const lsKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");

function loadFormData() {
    const storedData = localStorage.getItem(lsKey);

    if (storedData) {
        formData = JSON.parse(storedData);

        if (form.elements.email) {
            form.elements.email.value = formData.email || '';
        }
        if (form.elements.message) {
            form.elements.message.value = formData.message || '';
        }
    }
};

document.addEventListener('DOMContentLoaded', loadFormData);

form.addEventListener("input", (evt) => {
    const { name, value } = evt.target;
    formData[name] = value;

    localStorage.setItem(lsKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (!formData.email || !formData.message) {
                alert("Fill please all fields");
                return;
            }
    
    console.log("User data:", formData);
    localStorage.removeItem(lsKey);
    formData = { email: "", message: "" };
  form.reset();
});