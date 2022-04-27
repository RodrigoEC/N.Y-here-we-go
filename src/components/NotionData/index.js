import React from 'react';
import { ProgressBar } from '../ProgressBar';
import { TotalCost } from '../TotalCost';
import { ListElements } from '../../components/ListElements';
import { Reload } from '../icons/Reload';
import { Wrapper, ListsContainer, FailedWrapper, Title } from './style';

export const NotionData = ({ loadData, failed, finalPrice, paidAmount, elements }) => {

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
                <TotalCost finalPrice={finalPrice} />
            </Wrapper>
        )
}

NotionData.defaultProps = {};

