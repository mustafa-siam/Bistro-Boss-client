
const Heading = ({heading,subheading}) => {
    return (
        <div className="text-center m-y-12 space-y-5">
             <p className="text-[#D99904]">--- {subheading} ---</p>
             <h3 className="text-4xl">{heading}</h3>
        </div>
    );
};

export default Heading;