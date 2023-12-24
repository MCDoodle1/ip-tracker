


export default function Info({ ipData }) {

    return (
    <div className="info">
        <div className="info__ip-address">
            <h5 className="info__title">ip address</h5>
            <h3 className="info__content">{ipData.ip}</h3>            
        </div>
        <div className="info__location">
            <h5 className="info__title">location</h5>
            <h3 className="info__content">{ipData?.location?.city}, {ipData?.location?.region}, {ipData?.location?.country} {ipData?.location?.postalCode}</h3>
        </div>
        <div className="info__timezone">
            <h5 className="info__title">timezone</h5>
            <h3 className="info__content">UTC {ipData?.location?.timezone}</h3>
        </div>
        <div className="info__isp">
            <h5 className="info__title">isp</h5>
            <h3 className="info__content">{ipData?.isp}</h3>
        </div>
    </div>
    );
};