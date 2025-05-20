import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import Button from './Button';

const Card: React.FC<CardProps> = ({ image, title, description, onButtonClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image src={image} alt={title} width={400} height={250} className="object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button label="Book Now" onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Card;
