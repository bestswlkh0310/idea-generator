import styled from "styled-components";

function Home() {

  let outputList = [
    '흥미로운 주제를 입력해 보세요',
    '어떤 주제를 찾고 있나요?',
    '원하는 주제를 입력해 보세요'
  ]

  return (
    <Body>
      <Title>어떤 아이디어를 찾고 있나요?</Title>
      <Prompt placeholder='흥미로운 주제를 입력해 보세요'/>
      <GenerateButton>아이디어 생성하기</GenerateButton>
      <ResultText>총 10개의 아이디어가 생성되었어요</ResultText>
      <OutputContainer>
        {outputList.map((output, index) => {
          return <Output key={index}>{output}</Output>
        }
        )}
      </OutputContainer>
    </Body>
  );
}

export default Home;

const Title = styled.h1`
    font-size: 24px;
    margin-top: 40px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Prompt = styled.textarea`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    @media screen and (max-width: 550px){
      width: 90%;
    }
    font-size: 16px;
    resize: none;
    background-color: var(--white);
    padding: 20px;
    outline: none;
    border: none;
    border-radius: 8px;
    height: 40px;
    box-shadow: 0 8px 10px 0 var(--gray-300);
    &::placeholder {
      color: var(--gray-700);
    }
    &:focus {
      box-shadow: 0 10px 20px 0 var(--gray-400);
    }
    transition: box-shadow 0.3s ease-in-out;
`

const GenerateButton = styled.button`
    font-size: 16px;
    margin-top: 20px;
    width: 540px;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 700;
    border: 2px solid var(--blue-300);
    background-color: var(--blue-100);
    color: var(--blue-500);
    cursor: pointer;
    box-shadow: 0 8px 10px 0 var(--gray-300);
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 10px 20px 0 var(--gray-400);
    }
    @media screen and (max-width: 550px){
      width: 90%;
    }
`

const OutputContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    @media screen and (max-width: 550px){
      width: 90%;
    }
`

const ResultText = styled.div`
    font-size: 16px;
    margin-top: 40px;
    color: var(--gray-500);
    width: 100%;
    text-align: center;
`

const Output = styled.li`
    font-size: 16px;
    margin-top: 20px;
    color: var(--gray-700);
    &:hover {
      background-color: var(--gray-100);
    }
    width: 100%;
    transition: color 0.3s ease-in-out;
    list-style-type: none;
    margin-left: -40px;
    background-color: var(--white);
    box-shadow: 0 4px 10px 0 var(--gray-200);
    padding: 20px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out;
    border: 1px solid var(--gray-300);
`