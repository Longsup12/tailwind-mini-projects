import { TiTick } from "react-icons/ti";
const Pricing = () => {
    return ( 
        <div className="pricing-container box-container border-violet-600 border-[13px]">
            <div className="head-container">
                <div className="title-container text-24 m-6">
                    <span className="text-title">Basic</span>
                </div>
                <div className="deal-container flex flex-col">
                    <span className="text-memory text-48">100GB</span>
                    <span className="text-deal "> $1.99/Month</span>
                </div>
                <div className="purchase-container">
                    <a href="" className="purchase-btn btn-primary w-3/6 bg-violet-600">Purchase</a>
                </div>
            </div>
            <div className="bot-container">
                <div className="details-deal-container">
                    <span className="details-deal flex justify-center">
                        <TiTick color="white" className="inline-block"/>
                        <p>100Bh of storage</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="details-deal flex justify-center">
                        <TiTick color="white" className="inline-block"/>
                        <p>Option to add members</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="details-deal flex justify-center">
                        <TiTick color="white" className="inline-block"/>
                        <p>Extra member benefits</p>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Pricing;