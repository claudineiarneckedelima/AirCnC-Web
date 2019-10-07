import React, { useState, useMemo } from 'react';
import './index.scss';
import camera from '../../assets/camera.svg';
import api from '../../services/api';

const New = ({ history }) => {
  const [thumbnail, setThumbnail] = useState('');
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    const user_id = localStorage.getItem('user');

    await api.post('/spot', data, {
      headers: { user_id },
    });

    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
        <img src={camera} alt="Select imagem" />
      </label>

      <label htmlFor="">Empresa *</label>
      <input
        type="text"
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <label htmlFor="">
        Tecnologias * <span>(separado por vírgula)</span>
      </label>
      <input
        type="text"
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="">
        Valor da Diária * <span>vazio para GRATUITO</span>
      </label>
      <input
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
};

export default New;
