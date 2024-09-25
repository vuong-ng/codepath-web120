import { useState } from 'react'
import Card from './components/Card.jsx';
import './App.css'
import du_du_xanh from './assets/du_du_xanh.jpg';
import thanh_tue from './assets/thanh_tue.jpg';
import zenhouse from './assets/zenhouse.jpg';
import quan3 from './assets/quan3.jpg';
import quan4 from './assets/quan4.jpg';
import quan5 from './assets/quan5.jpg';
import quan6 from './assets/quan6.jpg';
import quan7 from './assets/quan7.jpg';
import quan8 from './assets/quan8.jpg';
function App() {

  return (
    <>
      <div className='header'>
        Vegetarian restaurant favorites
      </div>
      <div className='container'>
      <div>
        <Card img={du_du_xanh} alt="Du du xanh" resName="Du du xanh" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={thanh_tue} alt="Thanh tue" resName="Thanh tue" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={zenhouse} alt="zenhouse" resName="Zen House" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={quan3} alt=" Hum Vegetarian" resName="Hum Vegetarian" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={quan4} alt=" Prem Bistro & Café" resName=" Prem Bistro & Café" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={quan5} alt="Pi Vegetarian Bistro" resName="Pi Vegetarian Bistro" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={quan6} alt="Veganizta" resName="Veganizta" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={quan7} alt="METTA Vegetarian" resName="METTA Vegetarian" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        <div>
        <Card img={quan8} alt="Here & Now Vegetarian" resName="Here & Now Vegetarianh" location="Viet Nam"
        link="https://www.elle.vn/quan-diem-cong-dong/quan-chay-ngon-thanh-tinh-sai-gon"/>
        </div>
        
      </div>
    </>
  )
}

export default App
