import styled from "styled-components"
import { Spacer } from '../../component/foundation/Spacer';

export default function Contact() {
    return (
        <Container>
            <Title>Contact</Title>
            <Spacer h={'54px'}/>
            <ContentContainer>
                <SubTitle>누가 만들었나요</SubTitle>
                <Description>이강현</Description>
                <Spacer h={'24px'}/>
                <SubTitle>지금 어디있나요</SubTitle>
                <Description>대구소프트웨어마이스터고등학교</Description>
                <Spacer h={'24px'}/>
                <SubTitle>어디로 연락하나요</SubTitle>
                <Description>hhhello0507@gmail.com</Description>
            </ContentContainer>
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

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0;
    margin-top: 60px;
`

const SubTitle = styled.h2`
    font-size: 24px;
    margin: 0;
    margin-top: 12px;
`

const Description = styled.h2`
    font-size: 18px;
    color: var(--gray-600);
    margin: 0;
    margin-top: 8px;
`