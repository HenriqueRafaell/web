

import React, { useState, useEffect } from 'react';


function Header() {
  return (
    <header>
      <h1>Meu Aplicativo React</h1>
    </header>
  );
}


function Body({ data, setData }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddData = () => {
    setData([...data, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddData}>Adicionar</button>
    </div>
  );
}


function Footer() {
  return <footer>&copy; 2024 Meu Aplicativo React</footer>;
}


function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Header />
      <Body data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
