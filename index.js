// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value ,
//         email:document.getElementById("email").value,
//         message:document.getElementById("message").value,
//     };
// const serviceID = "service_ejonjxo";
// const templateID ="template_wl2derl";

// emailjs
// .send(serviceID,templateID,params)
// .then((res) =>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("your message sent successfully");
//     })
//     .catch((err) => console.log(err));
// }

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
  
        emailjs.sendForm('service_ejonjxo', 'template_wl2derl', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                console.error('Failed to send email:', error);
                alert('Failed to send email. Please try again.');
            });
    });
  });
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formMessage = document.getElementById('formMessage');
//     formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";

//     // Reset the form after submission
//     document.getElementById('contactForm').reset();
// });

