import React from 'react';
import { motion } from 'framer-motion';

interface NumberPickerProps {
  value: number;
  onChange: (newQuantity: number) => void;
}

export const NumberPicker: React.FC<NumberPickerProps> = ({ value, onChange }) => {
  const increase = () => onChange(value + 1);
  const decrease = () => {
    if (value > 1) onChange(value - 1);
  };
  
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      onChange(newValue);
    }
  };

  return (
    <div className="bg-secondaryC rounded-lg w-fit">
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={decrease}
        style={{
          padding: '10px',
          fontSize: '12px',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        -
      </motion.button>

      <motion.input
        type="number"
        value={value}
        onChange={handleValueChange}
        style={{
          textAlign: 'center',
          fontSize: '12px',
          width: `25px`,
          backgroundColor: '#232323',
          color: '#fff',
        }}
        min={1}
      />

      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={increase}
        style={{
          padding: '10px',
          fontSize: '12px',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        +
      </motion.button>
    </div>
  );
};
