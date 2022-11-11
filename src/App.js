import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchRetailSalesAsync, selectRetailSales} from "./features/retailSales/retailSalesSlice";
import LeftPanel from "./components/LeftPanel";
import RetailSalesTable from "./components/RetailSalesTable";
import RetailSalesChart from "./components/RetailSalesChart";

const App = () => {
    const retailSales = useSelector(selectRetailSales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRetailSalesAsync())
    }, [dispatch])

    return retailSales ? <div className="layout">
        <div className="header">
            <img src={`${process.env.PUBLIC_URL}/stackline_logo.svg`} alt="logo"/>
        </div>
        <div className="left-panel">
            <LeftPanel title={retailSales.title}
                       image={retailSales.image}
                       subtitle={retailSales.subtitle}
                       tags={retailSales.tags}/>
        </div>
        <div className="retail-sales-chart">
            <RetailSalesChart sales={retailSales.sales}/>
        </div>
        <div className="retail-sales-table">
            <RetailSalesTable sales={retailSales.sales}/>
        </div>
    </div> : 'Loading ...'
}

export default App;
