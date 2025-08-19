import React from 'react';
import chiefservice from "../../assets/home/chef-service.jpg"
const Chiefservice = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${chiefservice})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content  text-center ">
    <div className="md:w-3/4 bg-white  md:p-28 p-14">
      <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
      <p className="mb-5">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
      </p>
    </div>
  </div>
</div>
    );
};

export default Chiefservice;