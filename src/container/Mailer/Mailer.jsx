import emailjs from "emailjs-com"

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        
    emailjs.sendForm("service_pt1oju5",
     "template_8hfdhdb",
      e.target,
       "bJ9kDM60vmiAlSnyi"
       ).then(res=>{
        console.log(res)
    }).catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit ={sendEmail}>

                <label>Phrase</label>
                <textarea name="Phrase" rows="4"/>
                <input type="submit" value="Send"/>
            </form>
        </div>
     );
}

export default Mailer;