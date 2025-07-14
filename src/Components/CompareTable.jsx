export default () => {

    const tableItems = [
        {
             battery: "72hrs",
            weight: "145g",
            strap: "Leather"
        },
       {
             battery:"60hrs",
            weight: "190g",
            strap: "Leather"
        },
      
    ]


    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
              
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">Battery</th>
                            <th className="py-3 pr-6">Weight</th>
                            <th className="py-3 pr-6">Strap</th>
                           
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.battery}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.weight}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                      <td className="pr-6 py-4 whitespace-nowrap">{item.strap}</td>
                                    </td>
                                
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}