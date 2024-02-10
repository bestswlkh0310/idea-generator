import styled from "styled-components"
import support from '../../res/img_support.svg';
import { Spacer } from '../../component/foundation/Spacer';

export default function Support() {
    return (
        <Container>
            <Title>후원하기</Title>
            <Description>모든 후원에 감사드립니다</Description>
            <CeilContainer>
                <CardImage src={support}/>
                <CardContainer>
                    <CardView>
                        <Description>
                            카카오뱅크 7777-01-9063006
                        </Description>
                    </CardView>
                    <Spacer h={'12px'}/>
                    <CardView>
                        <Description>
                            토스뱅크 1908-6662-3625
                        </Description>
                    </CardView>
                </CardContainer>
            </CeilContainer>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding: 10px 0;
    border-radius: 0 0 32px 32px;
    flex-direction: column;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CeilContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
`

const CardView = styled.div`
    width: 330px;
    display: flex;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 0 10px;
    border-radius: 24px;
    background-color: white;
    box-shadow: 0 0 10px 0 var(--gray-300);
    border: 1px solid var(--gray-300);
`

const CardImage = styled.img`
    width: 28%;
    margin-right: 60px;
    @media (max-width: 1368px) {
        display: none;
    }
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0;
    margin-top: 60px;
`

const Description = styled.h2`
    font-size: 18px;
    color: var(--gray-600);
    margin: 0;
`