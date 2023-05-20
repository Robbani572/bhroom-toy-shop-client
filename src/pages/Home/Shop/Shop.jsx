import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Cards from "./Cards";


const Shop = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://bhroom-toy-shop-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className="mt-20 min-h-screen max-w-7xl container mx-auto">
            <div className="text-center space-y-7 mb-8">
                <h2 className="text-5xl font-bold text-[#1C0E0B]">Shop by Category</h2>
                <h4 className="text-2xl font-semibold">Let's do some shopping with bhroom shop</h4>
            </div>
            <Tabs
                selectedTabClassName="border-2 text-orange-500 rounded"
            >
                
                <TabList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8">
                    <Tab className="text-2xl font-bold cursor-pointer text-center">All</Tab>
                    <Tab className="text-2xl font-bold cursor-pointer text-center">Sports car</Tab>
                    <Tab className="text-2xl font-bold cursor-pointer text-center">Mini Fire Truck</Tab>
                    <Tab className="text-2xl font-bold cursor-pointer text-center">Truck</Tab>
                    <Tab className="text-2xl font-bold cursor-pointer text-center">Regular Car</Tab>
                    <Tab className="text-2xl font-bold cursor-pointer text-center">Mini Police Car</Tab>
                </TabList>

                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys.map(toy => (
                        // <div key={toy._id}>{toy.name}</div>
                        <Cards
                            key={toy._id}
                            toy = {toy}
                        ></Cards>
                    ))}
                </TabPanel>

                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys
                        .filter((toy) => toy.category === 'Sports Car')
                        .map((toy) => (
                            <Cards
                            key={toy._id}
                            toy = {toy}
                        ></Cards>
                        ))}
                </TabPanel>

                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys
                        .filter((toy) => toy.category === 'Mini Fire Truck')
                        .map((toy) => (
                            <Cards
                            key={toy._id}
                            toy = {toy}
                        ></Cards>
                        ))}
                </TabPanel>


                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys
                        .filter((toy) => toy.category === 'Truck')
                        .map((toy) => (
                            <Cards
                            key={toy._id}
                            toy = {toy}
                        ></Cards>
                        ))}
                </TabPanel>


                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys
                        .filter((toy) => toy.category === 'Regular Car')
                        .map((toy) => (
                            <Cards
                            key={toy._id}
                            toy = {toy}
                        ></Cards>
                        ))}
                </TabPanel>


                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys
                        .filter((toy) => toy.category === 'Mini Police Car')
                        .map((toy) => (
                            <Cards
                            key={toy._id}
                            toy = {toy}
                        ></Cards>
                        ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;