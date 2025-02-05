import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const NumberPicker = () => {
  const [value, setValue] = useState(0);

  const increase = () => setValue(prev => prev + 1);
  const decrease = () => setValue(prev => prev - 1);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value));

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
        type="string"
        value={value}
        onChange={handleValueChange}
        style={{
          textAlign: 'center',
          fontSize: '12px',
          width: `25px`,
          backgroundColor: '#232323',
          color: '#fff', 
        }}
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
