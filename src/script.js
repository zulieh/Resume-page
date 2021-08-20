const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    alert("form submition prevented")

    let mail = new FormData(form)

    sendMail(mail);
});

const sendMail = (mail) => {
    fetch("https://nodemailer-resume-page-hng.herokuapp.com//send", {
      method: "post", 
      body: mail,
  
    }).then((response) => {
      return response.json();
    });
  };