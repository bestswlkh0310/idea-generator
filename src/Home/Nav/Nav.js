import styled from "styled-components"


export default function Nav() {
    return (
        <Container>
            <div>
                <Logo>
                    아이디어 생성기
                </Logo>
            </div>
            <ButtonContainer>
                <Button>생성하기</Button>
                <Button>후원</Button>
                <Button>연락</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-300);
    background-color: var(--gray-100);
    padding-left: 20px;
    padding: 10px 0;
    box-shadow: 0 0 10px 0 var(--gray-300);
    border-radius: 0 0 32px 32px;
`

const Logo = styled.h1`
    font-size: 18px;
    padding: 8px 16px;
    color: var(--white);
    background-color: var(--blue-400);
    border-radius: 8px;
    margin-left: 60px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
`

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 10px;
    background-color: var(--transparent);
    cursor: pointer;
    font-size: 16px;
`