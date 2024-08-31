import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div className='mt-[120px] max-w-[1176px] mx-auto py-20'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.921737788894!2d49.853850796186165!3d40.37722254581139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1str!2saz!4v1725142011552!5m2!1str!2saz"
                    width="550px"
                    height="550"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>

            </div>

        </div>
    );
};

export default ContactPage;
