import React, { useEffect } from 'react'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'
import Copyright from '../UI/Copyright'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export default function Enquire({settings}) {
  return (
    <div>
        <Navbar />
        <ContactForm />
        <Footer settings={settings}/>
        <Copyright settings={settings}/>
    </div>
  )
}

const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
"Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
"Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
"Botswana", "Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon",
"Canada", "Central African Republic","Chad","Chile", "China","Colombia","Comoros",
"Congo (Congo-Brazzaville)","Costa Rica","Croatia","Cuba","Cyprus","Czechia","Denmark",
"Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt","El Salvador",
"Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
"Gabon", "Gambia","Georgia","Germany","Ghana", "Greece","Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
"Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
"Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", 
"Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
"Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
"Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", 
"Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", 
"Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
"Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
"Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
"South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
"Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
"United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

function ContactForm(){
  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  const onSubmit = async(data) =>{
    try{
        const response = await fetch('https://gojek.keydevsdemo.com/api/contacts', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
        });

        if(response.ok){
          toast.success('Form submitted successfully!');
          reset();
        }else{
          const errorData = await response.json();
          toast.error(`Error: ${errorData.message}`);
        }

    }catch(error){
        toast.error(`Error: ${error.message}`)
    }
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="container py-5">
    <Toaster position='top-center' /> 
    <div className="row">
      <div className="col-11 col-lg-6 ms-2 ms-sm-4 me-sm-4">
        <h2 style={{ color: "#3a6b9b", fontWeight: 600 }}>Enquire Now</h2>
        <strong>Feel Free to Enquire Now!</strong>
        <p className="paragraph mt-1">
          Simply fill the following form and we will respond with details about costs and the setup process: We shall get back to you within the next 8 - 10 hours!
        </p>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-md-row flex-column my-2">
            <input type="text" className="form-control me-3 contact-input" placeholder="Your Name*" 
              {...register('name')} required/>
              {errors.name && <span className="text-danger" style={{ fontSize: '14px' }}>{errors.name.message}</span>}
            <input type="email" className="form-control contact-input mt-3 mt-md-0" placeholder="Your Email*" 
              {...register('email')} required />
              {errors.email && <span className="text-danger" style={{ fsontSize: '14px' }}>{errors.email.message}</span>}
          </div>
          <div className="d-flex flex-md-row flex-column my-2">
            <select className="me-0 me-md-3 contact-input" {...register('country')}>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            <input type="text" className="form-control contact-input mt-3 mt-md-0" placeholder="Your Phone"
              {...register('phone')}/>
          </div>
          <div className="d-flex flex-md-row flex-column my-2">
            <input type="text" className="form-control me-3 contact-input" placeholder="Your Whatsapp"  {...register('whatsapp')}/>
            <input type="text" className="form-control contact-input mt-3 mt-md-0" placeholder="Your Skype Id"  {...register('skype_id')}/>
          </div>
          <input type="text" className="form-control contact-input my-2" placeholder="Send me details about support, cost, and working demo..."  {...register('subject')}/>
          <textarea placeholder="Your Message" className="my-4 p-1" rows="4"  {...register('message')} style={{outline: 'none'}}/>
          
          <div className="g-recaptcha mb-3" data-sitekey="6Lfkl5oqAAAAADiSvw-wrKugw-7uir6Bhe5l3xOn"></div>

          <button type="submit" className="nav-btn border-0 mb-4" style={{ color: "white", textTransform: "uppercase" }}>
            Submit
          </button>
        </form>
      </div>
      <div className="col-11 col-lg-5 contact px-0 me-lg-0 ms-3 ms-sm-4">
        <div className="contact-details">
          <strong style={{ fontSize: "20px" }}>Get In Touch</strong>
          <p className="text-center">Feel free to get in touch with us via WhatsApp, Phone, or Email</p>
        </div>
        <h4 className="my-3" style={{ fontSize: "18px" }}>For Quick Support</h4>
        <div className="d-flex align-items-center justify-content-center">
          <img src="Images/whatsapp.png" alt="Whatsapp" style={{ width: "10%" }} />
          <span>+44 (795) 735 17 62</span>
        </div>
        <h4 className="my-3" style={{ fontSize: "18px" }}>Phone & Email Support</h4>
        <div className="d-flex align-items-center justify-content-center">
          <img src="Images/phone.png" alt="Phone" style={{ width: "10%" }} />
          <span>+44 (795) 735 17 62</span>
        </div>
        <div className="d-flex align-items-center justify-content-center my-2">
          <img src="Images/mail.png" alt="Mail" style={{ width: "10%" }} />
          <span>sales@gojeksuperapps.com</span>
        </div>
      </div>
    </div>
  </div>
  )
}
