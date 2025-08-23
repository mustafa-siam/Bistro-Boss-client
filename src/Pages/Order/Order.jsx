import React, { useState } from 'react';
import Cover from '../coverbanner/Cover';
import orderimg from '../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenue from '../../Hooks/UseMenu';
import Foodcart from '../../Shared/Foodorder/Foodcart';
import Ordercatagory from './Ordercatagory';
import { useParams } from 'react-router-dom';
const Order = () => {
    const {catagory}=useParams();
    const catagories=["Dessert","Soup","Pizza","Salad","Drinks"]
    const catagoryidx=catagories.indexOf(catagory);
    const [tabIndex, setTabIndex] = useState(catagoryidx);
     const [menu]=useMenue();
        const dessert=menu.filter(item=>item.category==="dessert")
        const soup=menu.filter(item=>item.category==="soup")
        const salad=menu.filter(item=>item.category==="salad")
        const pizza=menu.filter(item=>item.category==="pizza")
        const drinks=menu.filter(item=>item.category==="drinks")
    return (  
        <div className='space-y-12'>
            <Helmet>
                <title>Order | BistroBoss</title>
            </Helmet>
            <Cover image={orderimg} title={"OUR SHOP"} details={"Would you like to try a dish?"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className={'flex justify-center items-center gap-12 my-12 '}>
        <Tab className={'pb-2 cursor-pointer'} selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506] font-semibold">Dessert</Tab>
        <Tab className={'pb-2 cursor-pointer'} selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506] font-semibold">Soup</Tab>
        <Tab className={'pb-2 cursor-pointer'} selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506] font-semibold">Pizza</Tab>
        <Tab className={'pb-2 cursor-pointer'} selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506] font-semibold">Salad</Tab>
        <Tab className={'pb-2 cursor-pointer'} selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506] font-semibold">Drinks</Tab>
      </TabList>
      <TabPanel>
        <Ordercatagory items={dessert}></Ordercatagory>
      </TabPanel>
      <TabPanel>
         <Ordercatagory items={soup}></Ordercatagory>
      </TabPanel>
      <TabPanel>
         <Ordercatagory items={pizza}></Ordercatagory>
      </TabPanel>
      <TabPanel>
         <Ordercatagory items={salad}></Ordercatagory>
      </TabPanel>
      <TabPanel>
         <Ordercatagory items={drinks}></Ordercatagory>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;