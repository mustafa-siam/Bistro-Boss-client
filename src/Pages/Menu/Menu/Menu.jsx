import React from 'react';
import { Helmet } from 'react-helmet-async';
import useMenue from '../../../Hooks/UseMenu';
import Menucatagory from '../Menucatagory/Menucatagory';
import Heading from '../../SectionHeading/Heading';
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../assets/menu/salad-bg.jpg'
import saladimg from '../../../assets/menu/dessert-bg.jpeg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import menuimg from '../../../assets/menu/banner3.jpg'
import Cover from '../../coverbanner/Cover';

const Menu = () => {
    const [menu]=useMenue();
    const dessert=menu.filter(item=>item.category==="dessert")
    const soup=menu.filter(item=>item.category==="soup")
    const salad=menu.filter(item=>item.category==="salad")
    const pizza=menu.filter(item=>item.category==="pizza")
    const offered=menu.filter(item=>item.category==="offered")
    return (
        <div className='space-y-12'>
            <Helmet>
                <title>Menu | BistroBoss</title>
            </Helmet>
            <Cover title={'OUR MENU'} image={menuimg} details={'Would you like to try a dish?'}></Cover>
            <Heading subheading={"Don't miss"} heading={"TODAY'S OFFER"}></Heading>
             <Menucatagory items={offered} ></Menucatagory>          
            <Menucatagory items={dessert} title={'Dessert'} img={dessertimg}details={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menucatagory>
            <Menucatagory items={pizza} title={'Pizza'} img={pizzaimg}details={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menucatagory>
            <Menucatagory items={salad} title={'Salad'} img={saladimg}details={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menucatagory>
            <Menucatagory items={soup} title={'Soup'} img={soupimg}details={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menucatagory>
        </div>
    );
};

export default Menu;