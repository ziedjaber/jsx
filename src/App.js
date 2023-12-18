import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import productData from './product';

const firstName = 'Jabeur Mohamed Zied'; 
const App = () => {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '20px'
     }}>
      <Card style={{ width: '25rem', margin: 'auto', marginTop: '50px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}>
        <Image url={productData.image} />
        <Card.Body style={{ padding: '20px' }}>
          <Name name={productData.name} style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '10px', color: '#333' }} />
          <Price price={productData.price} style={{ fontSize: '1.2em', color: '#007bff', marginBottom: '10px' }} />
          <Description description={productData.description} style={{ fontSize: '1em', fontStyle: 'italic', color: '#555' }} />
        </Card.Body>
      </Card>
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.2em', color: '#444' }}>
        {firstName ? `Bonjour, ${firstName} !` : 'Bonjour à tous !'}
      </p>
      {firstName && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/331915873_930009441340194_6351325955163883039_n.jpg?stp=c56.0.447.447a_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=MH4rSO-O1Q4AX_sOZQc&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDwVmS0jKg6iLAcEOypYW2AOd4glu59kCa1bUTFq4Rk5Q&oe=65861B75"
            alt="error"
            style={{ width: '200px', height: '200px', borderRadius: '50%', border: '4px solid #007bff' }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
