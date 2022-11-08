export function fetchRetailSales() {
    return new Promise((resolve) =>
        fetch(`${process.env.PUBLIC_URL}/retailSales.json`)
            .then(r => r.json())
            .then(salesData => {
                resolve({data: salesData[0]})
            })
    );
}
