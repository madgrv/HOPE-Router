import React, { useEffect, useState } from 'react';

export default function CatGenerator() {
  const [catUrl, setCatUrl] = useState('https://cdn2.thecatapi.com/images/4h4.gif');

  async function getCat() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const catData = await res.json();
    setCatUrl(catData[0].url);
  }

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="flexItem">
      <div className="box">
        <h2 className="shadow">
          Cat Generator
        </h2>
        <p>A function to display a cat gif from a free API and change image by clicking on button</p>
        <p className="smallPrint">Source: https://api.thecatapi.com</p>
        <br />
        <button className='form-button' onClick={getCat}>
          Change Cat
        </button>
        <div id="catImg">
          <img className="imgFrame" id="catIt" src={catUrl} alt="temp img" />
        </div>
      </div>
    </div>
  );
}
