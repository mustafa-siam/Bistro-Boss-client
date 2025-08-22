import Heading from '../SectionHeading/Heading';
import Menuitem from '../../Shared/Menuitem/Menuitem';
import useMenue from '../../Hooks/UseMenu';

const Popularitems = () => {
    const [menu]=useMenue();
    const popular=menu.filter(item=>item.category==="popular")
    return (
        <div className='space-y-12'>
            <section>
                <Heading
                subheading={'Check it out'}
                heading={'FROM OUR MENU'}
                >
                </Heading>
            </section>
            <div className='grid grid-cols-2 gap-6'>
                {
                    popular.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </div>
    );
};

export default Popularitems;