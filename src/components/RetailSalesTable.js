import React, {useState} from 'react';
import PropTypes from 'prop-types';

const currency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
})

const formatDate = (date) => {
    const [year, month, day] = date.split('-')
    return `${day}-${month}-${year.slice(2)}`
}

const formatCurrency = (num) => {
    return currency.format(num)
}

const comparator = {
    weekEnding: (a, b) => {
        return new Date(a) - new Date(b)
    },
    retailSales: (a, b) => {
        return a - b
    },
    wholesaleSales: (a, b) => {
        return a - b
    },
    unitsSold: (a, b) => {
        return a - b
    },
    retailerMargin: (a, b) => {
        return a - b
    },
}

const RetailSalesTable = ({sales}) => {
    const [sortKey, setSortKey] = useState('weekEnding')
    const [asc, setAsc] = useState(true);

    let sortedSales = [...sales].sort((a, b) => {
        return comparator[sortKey](a[sortKey], b[sortKey])
    })
    if (!asc) {
        sortedSales.reverse()
    }
    const handleSortBy = (newSortKey) => {
        if (newSortKey === sortKey) {
            setAsc(!asc)
        } else {
            setSortKey(newSortKey)
            setAsc(true)
        }
    }
    const activeClass = (key) => {
        if (sortKey === key) {
            return 'active ' + (asc ? 'asc' : 'desc');
        }
        return ''
    }
    return (
        <table className="table">
            <thead>
            <tr>
                <td onClick={() => handleSortBy('weekEnding')}
                    className={'left-text ' + activeClass('weekEnding')}>
                    Week ending
                </td>
                <td onClick={() => handleSortBy('retailSales')}
                    className={'right-text ' + activeClass('retailSales')}>
                    Retail Sales
                </td>
                <td onClick={() => handleSortBy('wholesaleSales')}
                    className={'right-text ' + activeClass('wholesaleSales')}>
                    Wholesale Sales
                </td>
                <td onClick={() => handleSortBy('unitsSold')}
                    className={'right-text ' + activeClass('unitsSold')}>
                    Units Sold
                </td>
                <td onClick={() => handleSortBy('retailerMargin')}
                    className={'right-text ' + activeClass('retailerMargin')}>
                    Retailer Margin
                </td>
            </tr>
            </thead>
            <tbody>
            {sortedSales.map(s =>
                <tr key={s.weekEnding}>
                    <td className="left-text">{formatDate(s.weekEnding)}</td>
                    <td className="right-text">{formatCurrency(s.retailSales)}</td>
                    <td className="right-text">{s.wholesaleSales}</td>
                    <td className="right-text">{s.unitsSold}</td>
                    <td className="right-text">{formatCurrency(s.retailerMargin)}</td>
                </tr>)}
            </tbody>
        </table>
    );
};

RetailSalesTable.propTypes = {
    sales: PropTypes.array
};

export default RetailSalesTable;
