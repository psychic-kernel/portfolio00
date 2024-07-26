export async function getMarketData() {
    try {
        const response = await fetch('http://localhost:3001/api/market-details');
        const data = await response.json();
        const content = data.result.rows;
        console.log(data);
        return content;

    } catch (e) {
        console.error('Error fetching market data:', e.message);
        return null;
    }
}


const MarketData = async () => {
    const content = await getMarketData();

    return (
        <>
            <h1 className="text-4xl ml-5">Market Data</h1>
            {content.map((i) => {
                
                return <>
                        <table className="w-full text-blue-200">
                            <tbody>
                                <tr key={i.id} className="flex justify-between">
                                    <td className="pl-10 pb-3">{i.stock_symbol}</td>
                                    <td className="pb-3">{i.stock_name}</td>
                                    <td className="pb-3 text-green-300">
                                        {i.stock_change}
                                    </td>
                                    <td className="pb-3 mr-10">${i.stock_price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
            })}

        </>
    )

}; export default MarketData;