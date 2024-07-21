import React from 'react'
import '../assets/scss/footer.scss'

const Footer = () => {
  return (
    <>
       <div className="title">
            <h2 className="badge">
                Contactez moi
            </h2>
            <span className="subtitle">
                Quelles sont les prochaines étapes ? N'hésitez pas à me contacter si vous cherchez un développeur ou un alternant, si vous avez une question ou si vous souhaitez simplement vous mettre en relation.
            </span>
        </div>
        <div className="content">
           <form action="">
                <div className="group-checkbox">
                    <span className="label">Qui ètes vous ?</span>
                    <div className="checkboxs">
                        <div className="group-check">
                            <input type="radio" name="which" id="enterprise" />
                            <label htmlFor="enterprise">Une entreprise</label>
                        </div>
                        <div className="group-check">
                            <input type="radio" name="which" id="freelance" />
                            <label htmlFor="freelance">Un freelance</label>
                        </div>
                        <div className="group-check">
                            <input type="radio" name="which" id="individual" />
                            <label htmlFor="individual">Un particulier</label>
                        </div>
                    </div>
                </div>
                <div className="group-input">
                    <input type="text" name='name' id='name' placeholder="Jhon Smith"/>
                    <label htmlFor="name">Votre nom</label>
                </div>
                <div className="group-input">
                    <input type="text" name='email' id='email' placeholder='exemple@exemple.fr'/>
                    <label htmlFor="email">Adress email</label>
                </div>
                <div className="group-input text">
                    <textarea name='msg' id='msg' placeholder='Votre message ici...'></textarea>
                    <label htmlFor="msg">Message</label>
                </div>
                <button type="submit">Envoyé le message</button>
           </form>
        </div> 
        <div className="copy">
            &copy; Codinglabs 2024
        </div>
    </>
  )
}

export default Footer