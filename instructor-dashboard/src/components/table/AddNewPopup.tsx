import React, { useState } from 'react';

interface Data {
  name: string;
  code: string;
  age: number;
  size: number;
  density: number;
}

const createData = (
  name: string,
  code: string,
  age: number,
  size: number
): Data => {
  const density = age / size;
  return { name, code, age, size, density };
};

interface AddNewPopupProps {
  onClose: () => void;
  onAdd: (newData: Data) => void;
}

const AddNewPopup: React.FC<AddNewPopupProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [age, setAge] = useState(0);
  const [size, setSize] = useState(0);

  const handleAdd = () => {
    const newData: Data = createData(name, code, age, size);
    onAdd(newData);
    onClose();
  };

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Code:</label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
      />

      <label>Size:</label>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(parseInt(e.target.value, 10))}
      />

      <button onClick={handleAdd}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddNewPopup;
