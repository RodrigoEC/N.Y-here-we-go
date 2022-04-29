import React from 'react';
import { ProgressBar } from '../ProgressBar';
import { TotalCost } from '../TotalCost';
import { ListElements } from '../../components/ListElements';
import { Reload } from '../icons/Reload';
import { Wrapper, ListsContainer, FailedWrapper, Title } from './style';
import { Cross } from '../icons/Cross';
import { useContent } from '../../context/elements';

export const NotionData = () => {
    const {
        setActiveModal,
        getListData: loadData,
        failed, finalPrice,
        paidAmount,
        listElements: elements,
    } = useContent();
    const handleModal = () => setActiveModal(previous => !previous);

    return failed ?
        (
            <FailedWrapper>
                <Title>
                    Erro ao carregar dados.
                    <br />
                    Clique no ícone abaixo para recarrega-los
                </Title>
                <div onClick={loadData}><Reload /></div>
            </FailedWrapper>
        )
        : (
            <Wrapper>
                <ProgressBar finalPrice={finalPrice} paidAmount={paidAmount} />
                <div id='add-cross' onClick={handleModal}>
                    <Cross />
                </div>
                <ListsContainer>
                    {
                        Object.keys(elements).map((elementCategory) => {
                            return <ListElements
                                key={elementCategory}
                                title={elementCategory}
                                elements={elements[elementCategory]}
                            />
                        })
                    }
                </ ListsContainer>
                <TotalCost finalPrice={finalPrice} paidAmount={paidAmount} />
            </Wrapper>
        )
}

NotionData.defaultProps = {};

