import React from 'react';
import ClothingRail from './components/ClothingRail';
import users from './resources/data/users';
import './data/fa-library';
import EditProfile from './components/EditProfile';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import ProfileBottom from './components/ProfileScreen';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';
import Button from './components/Button';

const App = () => (
  <>
    <Button />
    <ClothingRail uniData={uniData[1]} />
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <EditProfile user={users[0]} />
    <ProfileTop user={users[0]} uni={uniData[2]} />
    <ProfileBottom clothingItem={fakeClothingData[0]} />
    <Navbar />
  </>
);

export default App;
