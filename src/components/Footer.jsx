import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/scss/footer.scss';
import Loader from '../assets/img/loader.gif';
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

const Footer = () => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    which: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
        setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Regex patterns
    const namePattern = /^[a-zA-Z\s]{2,30}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate name
    if (!form.user_name || !namePattern.test(form.user_name)) {
      newErrors.user_name = 'Veuillez entrer un nom valide (2-50 lettres).';
    }

    // Validate email
    if (!form.user_email || !emailPattern.test(form.user_email)) {
      newErrors.user_email = 'Veuillez entrer une adresse email valide.';
    }

    // Validate which
    if (!form.which) {
      newErrors.which = 'Veuillez sélectionner une option.';
    }

    // Validate message
    if (!form.message || form.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs.sendForm('service_avngcdn', 'template_oooofkz', e.target, 'kjhFcz0Bz8pAoLF4e')
      .then((result) => {
        console.log(result.text);
        setStatus('Votre message a été envoyé avec succès');
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
            setStatus('');
        }, 3000);
        setForm({
            user_name: '',
            user_email: '',
            which: '',
            message: ''
        });
        clearRadioSelection();
      }, (error) => {
        console.log(error.text);
        setStatus('Une erreur est survenue. Merci de réessayer ultérieurement.');
        setSuccess(false);
        setLoading(false);
        setTimeout(() => {
            setStatus('');
        }, 3000);
      });
  };

  const clearRadioSelection = () => {
    setForm(prevForm => ({ ...prevForm, which: '' }));
    document.querySelectorAll('input[name="which"]').forEach(input => {
      input.checked = false;
    });
  };

  return (
    <>
      <div className={`alert ${status ? 'visible' : 'hidden'} ${success ? 'success' : 'error'}`}>
        <div className="icon__wrapper">
          <span>{success ? <FaCircleCheck /> : <FaCircleExclamation />}</span>
        </div>
        <p>{status}</p>
      </div>
      <div className="container">
      <div className="title" id='contact'>
        <h2 className="badge">Contactez moi</h2>
        <span className="subtitle">
          Quelles sont les prochaines étapes ? N'hésitez pas à me contacter si vous cherchez un développeur ou un alternant, si vous avez une question ou si vous souhaitez simplement vous mettre en relation.
        </span>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="group-checkbox">
            <fieldset className="checkboxs">
              <legend className='label'>Qui êtes-vous ?</legend>
              <div className="group-check">
                <input type="radio" name="which" id="enterprise" value="enterprise" onChange={handleChange} />
                <label htmlFor="enterprise" className={errors.which ? "error" : ""}>Une entreprise</label>
              </div>
              <div className="group-check">
                <input type="radio" name="which" id="freelance" value="freelance" onChange={handleChange} />
                <label htmlFor="freelance" className={errors.which ? "error" : ""}>Un freelance</label>
              </div>
              <div className="group-check">
                <input type="radio" name="which" id="individual" value="individual" onChange={handleChange} />
                <label htmlFor="individual" className={errors.which ? "error" : ""}>Un particulier</label>
              </div>
            </fieldset>
            {errors.which && <p className="error">{errors.which}</p>}
          </div>
          <div className="group-input">
            {errors.user_name && <p className="error">{errors.user_name}</p>}
            <input type="text" className={errors.user_name ? "error" : ""} name='user_name' id='name' placeholder="John Smith" value={form.user_name} onChange={handleChange} />
            <label htmlFor="name">Votre nom</label>
          </div>
          <div className="group-input">
            {errors.user_email && <p className="error">{errors.user_email}</p>}
            <input type="text" className={errors.user_email ? "error" : ""} name='user_email' id='email' placeholder='exemple@exemple.fr' value={form.user_email} onChange={handleChange} />
            <label htmlFor="email">Adresse email</label>
          </div>
          <div className="group-input text">
            {errors.message && <p className="error">{errors.message}</p>}
            <textarea name='message' className={errors.message ? "error" : ""} id='msg' placeholder='Votre message ici...' value={form.message} onChange={handleChange}></textarea>
            <label htmlFor="msg">Message</label>
          </div>
          <button type="submit">{loading ? <span class="loader"></span> : 'Envoyer le message'}</button>
        </form>
      </div>
      <div className="copy">
        &copy; Codinglabs 2024
      </div>
      </div>
    </>
  );
};

export default Footer;
