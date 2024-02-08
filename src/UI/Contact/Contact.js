import styled from "styled-components"
import { Spacer } from '../../component/foundation/Spacer';

export default function Contact() {
    return (
        <Container>
            <Title>Contact</Title>
            <Spacer h={'54px'}/>
            <SubTitle>제작자</SubTitle>
            <Description>이강현</Description>
            <Spacer h={'24px'}/>
            <SubTitle>소속</SubTitle>
            <Description>대구소프트웨어마이스터고등학교</Description>
            <Spacer h={'24px'}/>
            <SubTitle>메일</SubTitle>
            <Description>hhhello0507@gmail.com</Description>
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

const Title = styled.h1`
    font-size: 32px;
    margin: 0;
    margin-top: 60px;
`

const SubTitle = styled.h2`
    font-size: 24px;
    margin: 0;
`

const Description = styled.h2`
    font-size: 18px;
    color: var(--gray-600);
    margin: 0;
`