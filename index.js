const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "balukareepadath@gmail.com",
        pass: "esxl fnfd qzer jfxu"
    }
})

let details = {
    from:"balukareepadath@gmail.com",
    to: "athulsiva.a8@gmail.com",
    subject: "test",
    text: "test mail"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("error " , err)
    }
    else{
        console.log("email send")
    }
})