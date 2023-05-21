import { FaAmazonPay, FaShoppingCart, FaShuttleVan } from "react-icons/fa";


const WebFeature = () => {
    return (
        <div className="max-w-7xl container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col flex flex-col items-center bg-white shadow-md rounded p-4">
                    <FaAmazonPay className="w-40 h-40 text-center"></FaAmazonPay>
                    <h3 className="text-3xl font-bold mb-8 text-center">Easy Payment system</h3>
                    <p className="text-center text-gray-600 font-semibold">We have the easyest payment system for client perfection. You can use any online payment system</p>
                </div>
                <div className="col flex flex-col items-center bg-white shadow-md rounded p-4">
                <FaShoppingCart className="w-40 h-40 text-center"></FaShoppingCart>
                    <h3 className="text-3xl font-bold mb-8 text-center">100% Client Friendly</h3>
                    <p className="text-center text-gray-600 font-semibold">If any you are not satisfied with our toys quality then you can return it, and you will get 100% back of your payment</p>
                </div>
                <div className="col flex flex-col items-center bg-white shadow-md rounded p-4">
                <FaShuttleVan className="w-40 h-40 text-center"></FaShuttleVan>
                    <h3 className="text-3xl font-bold mb-8 text-center">Fast Delivery</h3>
                    <p className="text-center text-gray-600 font-semibold">We have the fastes delivery system. You can get your order within 24hr of your order placement</p>
                </div>

            </div>
        </div>
    );
};

export default WebFeature;