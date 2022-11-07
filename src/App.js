import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchRetailSalesAsync, selectRetailSales} from "./features/counter/counterSlice";
import LeftPanel from "./components/LeftPanel";
import RetailSalesTable from "./components/RetailSalesTable";

const App = () => {
    const retailSales = useSelector(selectRetailSales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRetailSalesAsync())
    }, [dispatch])

    return retailSales ? <div className="layout">
        <header>
            <img src={`${process.env.PUBLIC_URL}/stackline_logo.svg`} alt="logo"/>
        </header>
        <div className="left-panel">
            <LeftPanel title={retailSales.title}
                       image={retailSales.image}
                       subtitle={retailSales.subtitle}
                       tags={retailSales.tags}/>
        </div>
        <div className="retail-sales">
            <RetailSalesTable sales={retailSales.sales}/>
        </div>
    </div> : 'Loading ...'
}

export default App;
