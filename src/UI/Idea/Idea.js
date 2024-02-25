import styled from "styled-components";
import IdeaService from '../../service/IdeaService';
import { useRef, useState } from "react";

function Idea() {

  const [outputList, setOutputList] = useState([]);
  const prompt = useRef();
  const [isLoading, setIsLoading] = useState(false);

  function generateIdea() {
    // textarea값 가져오기
    const promptValue = prompt.current.value;
    
    if (promptValue === '' || isLoading) {
      alert('프롬프트를 입력해 주세요');
      return
    }
    
    setIsLoading(true);
    IdeaService.justGpt(promptValue)
      .then((response) => {
        console.log(response);
        setOutputList(i => i.concat(response));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  return (
    <Body>
      <Title>어떤 아이디어를 찾고 있나요?</Title>
      <Prompt ref={prompt} placeholder='흥미로운 주제를 입력해 보세요' />
      <GenerateButton isLoading={isLoading} onClick={() => generateIdea()}>아이디어 생성하기</GenerateButton>
      {outputList.length !== 0 && <ResultText>총 10개의 아이디어가 생성되었어요</ResultText>}
      <OutputContainer>
        {outputList.map((output, index) => {
          return <Output key={index}>{output}</Output>
        })}
      </OutputContainer>
    </Body>
  );
}

export default Idea;

const Title = styled.h1`
    font-size: 24px;
    margin-top: 40px;
`

const Body = styled.section`
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
    background-color: ${props => props.isLoading ? 'var(--blue-200)' : 'var(--blue-100)'};
    color: var(--blue-500);
    cursor: ${props => props.isLoading ? 'not-allowed' : 'pointer'};
    box-shadow: 0 8px 10px 0 var(--gray-300);
    transition: 0.3s;
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
    line-height: 160%;
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