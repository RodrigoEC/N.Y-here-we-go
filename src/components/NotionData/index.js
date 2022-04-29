import React from 'react';
import { ProgressBar } from '../ProgressBar';
import { TotalCost } from '../TotalCost';
import { ListElements } from '../../components/ListElements';
import { Reload } from '../icons/Reload';
import { Wrapper, ListsContainer, FailedWrapper, Title } from './style';
import { Cross } from '../icons/Cross';

export const NotionData = ({ setActiveModal, loadData, failed, finalPrice, paidAmount, elements, handleCheckElement }) => {

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
                <div onClick={handleModal}>
                    <Cross id='add-cross' />
                </div>
                <ListsContainer>
                    {
                        Object.keys(elements).map((elementCategory) => {
                            return <ListElements
                                onCheck={handleCheckElement}
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

