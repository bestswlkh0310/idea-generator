import styled from "styled-components"
import support from '../../res/img_support.svg';

export default function Support() {
    return (
        <Container>
            <Title>후원하기</Title>
            <Description>모든 후원에 감사드립니다</Description>
            <CardContainer>
                <CardImage src={support}/>
                <CardView>
                </CardView>
                <CardView>
                </CardView>
            </CardContainer>
        </Container>
    );
}

const Container = styled.div`
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
    align-items: end;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
`

const CardView = styled.div`
    width: 300px;
    height: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin: 0 10px;
    border-radius: 24px;
    background-color: white;
    box-shadow: 0 0 10px 0 var(--gray-300);
    border: 1px solid var(--gray-300);
    @media (max-width: calc(300px + 300px + 20px + 20px)) {
        width: 100%;
        margin: 0 4px;
    }
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