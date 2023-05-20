import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Tabse = () => {

    const [cotogor, setCotogor] = useState([]);

    useEffect(() => {
        fetch('https://assingment-11-serversit-yahiamasud.vercel.app/catogori')
            .then((res) => res.json())
            .then((data) => {
                setCotogor(data);
                console.log(data);
            })
    }, [])
    console.log(cotogor);

    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl'>ToyCor-Catagoris</h1>
            <Tabs>
                <TabList className="text-center  mt-20 mb-20 ">
                    {
                        cotogor.map(coto => <Tab><p className='text-2xl font-bold'>{coto.category_name}</p></Tab>)
                    }
                </TabList>

                <TabPanel className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* {cotogor.items.map(all => <div> <p>{all.product_name}</p> </div>)} */}
                    
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Tabse;