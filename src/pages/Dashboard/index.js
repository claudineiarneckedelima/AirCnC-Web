import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import api from '../../services/api';
import SpotList from '../../components/SpotList';

const Dashboard = () => {
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    const load = async () => {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });

      console.log(response.data, user_id);
      setSpot(response.data, user_id);
    };

    load();
  }, []);

  return (
    <>
      <SpotList value={spot} />
      <Link to="/new">
        <button type="submit" className="btn">
          Cadastrar novo Spot
        </button>
      </Link>
    </>
  );
};

export default Dashboard;
