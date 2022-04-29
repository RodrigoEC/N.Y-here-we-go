import React, { createContext, useContext, useState, useEffect } from 'react'
import { getDolar } from '../services/dolar';
import { getListDatabase } from '../services/notion';



const ContentContext = createContext()

export default function ContentProvider({ children }) {
    const [NYTaxes,] = useState(8.88);
    const [dolar, setDolar] = useState(0);
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    const [listElementsRaw, setListElementsRaw] = useState([]);
    const [listElements, setListElements] = useState({});
    const [finalPrice, setFinalPrice] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [activeModal, setActiveModal] = useState(true);

    const formatElementsList = (listData) => {
        const listObject = {};

        listData.forEach((data) => {
            if (data.properties['Categoria'].select && listObject[data.properties['Categoria'].select.name]) {
                listObject[data.properties['Categoria'].select.name].push(data);
            } else if (data.properties['Categoria'].select) {
                listObject[data.properties['Categoria'].select.name] = [data];
            }
        })

        setListElementsRaw(listData);
        setListElements(listObject);
    }

    const getListData = async () => {
        setLoading(true);

        const listData = await getListDatabase();

        if (!listData) {
            setFailed(true);
        } else {
            formatElementsList(listData.results);
            setFailed(false);
        }
        setLoading(false);
    }

    const value = {
        NYTaxes,
        dolar,
        setDolar,
        loading,
        setLoading,
        failed,
        setFailed,
        listElementsRaw,
        setListElementsRaw,
        listElements,
        setListElements,
        finalPrice,
        setFinalPrice,
        paidAmount,
        setPaidAmount,
        formatElementsList,
        getListData,
        activeModal,
        setActiveModal,
    }


    useEffect(() => {
        const getDolarData = async () => {
            const dolarJson = await getDolar();
            setDolar(dolarJson.USDBRLT.ask);
        }

        getListData();
        getDolarData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const finalPrice = listElementsRaw.reduce((final, element) => {
            const elementPrice = element.properties['Preço'].number
            if (!elementPrice) {
                return final;
            };

            if (element.properties['Moeda'].select.name === 'Dolar') {
                return (elementPrice * (100 + NYTaxes) / 100) * dolar + final;
            }

            return elementPrice + final;
        }, 0);
        setFinalPrice(finalPrice);

        const paidAmout = listElementsRaw.reduce((final, element) => {
            const elementPrice = element.properties['Preço'].number
            if (!elementPrice || !element.properties['Check'].checkbox) {
                return final;
            };

            if (element.properties['Moeda'].select.name === 'Dolar') {
                return (elementPrice * (100 + NYTaxes) / 100) * dolar + final;
            }

            return elementPrice + final;
        }, 0);
        setPaidAmount(paidAmout);


    }, [listElementsRaw, setFinalPrice, NYTaxes, dolar, listElements])

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export function useContent() {
    const context = useContext(ContentContext);

    return { ...context };
}