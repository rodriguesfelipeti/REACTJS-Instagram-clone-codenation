import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [successmsg, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postObject
    }).then(() => setSuccess(!successmsg));
    
  }

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
            <div className="container">
                <div className="profile-data">
                    <div className="user">
                        <div className="user__thumb"><img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt="" /></div>
                        <p className="user__name">John Doe<span>@johndoe</span></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="post__form">
            <div className="container">
                <div className="post__form__wrapper">
                    <label>Nome</label>
                      <input type="text" placeholder="Ex: Fulano da Silva" onChange={(event) => setName(event.target.value)} />
                    <label>Usuário</label>
                      <input type="text" placeholder="Ex: fulano_da_silva" onChange={(event) => setUsername(event.target.value)} />
                    <label>Email</label>
                      <input type="email" placeholder="Ex: fulano@provedor.com" onChange={(event) => setEmail(event.target.value)} />
                    <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
                      <input type="text" placeholder="http://..." onChange={(event) => setAvatar(event.target.value)} />
                    <button type="button" onClick={event => handleSubmit(event)}>Cadastrar</button>
                </div>
            </div>
        </section>
        {
          successmsg &&
          <SuccessMessage />
        }
    </React.Fragment>
  );
};

export default UserForm;
