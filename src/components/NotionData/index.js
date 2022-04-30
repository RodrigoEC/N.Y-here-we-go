import React from 'react';
import { ListElements } from '../../components/ListElements';
import { Reload } from '../icons/Reload';
import { Wrapper, ListsContainer, FailedWrapper, Title } from './style';
import { useContent } from '../../context/elements';

export const NotionData = () => {
    const {
        getListData: loadData,
        failed,
        listElements: elements,
    } = useContent();

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
            </Wrapper>
        )
}

NotionData.defaultProps = {};

