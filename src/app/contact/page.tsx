import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
    <h2 className='h2' data-aos="fade-up">Contact us</h2>
   <form>
     <input type="text" placeholder='Full Name' className='input' required />
     <input type="text" placeholder='Email Address' className='h1' required />
     <input type="Phone Number" placeholder='Phone Number' className='h6'  />
     <textarea  placeholder='Your Message' className='textarea' rows={5} required ></textarea>  
     <button type='submit'  className='button'>Send Message</button>
   </form>
    </section>
  );
};

export default Contact;