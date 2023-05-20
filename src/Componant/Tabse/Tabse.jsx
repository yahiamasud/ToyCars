import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabse.css'
import { Link } from 'react-router-dom';

const Tabse = () => {

    const [cards, setCards] = useState([]);
    const [cards1, setCard1] = useState([]);
    const [cards2, setCard2] = useState([]);
    const [cards3, setCard3] = useState([]);

    // console.log(cards1);
    const name1 = cards1.map(card => card);
    const name2 = cards2.map(card => card);
    const name3 = cards3.map(card => card);

    console.log(name1)
    // catagori

    useEffect(() => {
        fetch('https://assingment-11-serversit-yahiamasud.vercel.app/catogori')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
            })
    }, [])
    //items one    
    useEffect(() => {
        fetch('https://assingment-11-serversit-yahiamasud.vercel.app/items1')
            .then((res) => res.json())
            .then((data) => {
                setCard1(data);
            })
    }, [])
    //items two   
    useEffect(() => {
        fetch('https://assingment-11-serversit-yahiamasud.vercel.app/items2')
            .then((res) => res.json())
            .then((data) => {
                setCard2(data);
            })
    }, [])
    //items three    
    useEffect(() => {
        fetch('https://assingment-11-serversit-yahiamasud.vercel.app/items3')
            .then((res) => res.json())
            .then((data) => {
                setCard3(data);
            })
    }, [])


    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl'>ToyCor Catagoris</h1>
            <Tabs className='m-5'>
                <TabList className="text-center  mt-20 ">
                    {
                        cards.map(card => <Tab><p className='text-2xl font-bold'>{card.category_name}</p></Tab>)
                    }
                </TabList>
                <TabPanel className='grid grid-cols-1  m-5 md:grid-cols-2 gap-4'>
                    {
                        name1.map(data => <div >
                            <div className="card  bg-base-100 shadow-xl">
                                <figure><img className='imgcard' src={data.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.product_name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/ShowCatagori/${data._id}`}>
                                            <button className="btn btn-primary">Show detele</button>
                                        </Link>
                                    </div>
                                </div>
                            </div></div>)
                    }
                </TabPanel>

                <TabPanel className=' grid grid-cols-1  m-5 md:grid-cols-2 gap-4'>
                    {
                        name2.map(data => <div><div className="card  bg-base-100 shadow-xl">
                            <figure><img className='imgcard' src={data.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.product_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/ShowCatagori/${data._id}`}>
                                        <button className="btn btn-primary">Show detele</button>
                                    </Link>
                                </div>
                            </div>
                        </div></div>)
                    }
                </TabPanel>
                <TabPanel className=' grid grid-cols-1 m-5 md:grid-cols-2 gap-4 '>
                    {
                        name3.map(data => <div><div className="card  bg-base-100 shadow-xl">
                            <figure><img className='imgcard' src={data.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.product_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/ShowCatagori/${data._id}`}>
                                        <button className="btn btn-primary">Show detele</button>
                                    </Link>
                                </div>
                            </div>
                        </div></div>)
                    }
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Tabse;