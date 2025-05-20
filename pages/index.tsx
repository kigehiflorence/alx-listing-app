import React from 'react';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <Card
        image="/assets/house1.jpg"
        title="Modern Beachfront Villa"
        description="A beautiful beachfront property with ocean views and luxurious amenities."
        onButtonClick={() => alert('Booking initiated!')}
      />
    </div>
  );
};

export default Home;
