import styled, { css } from "styled-components";
import { shadow1 } from "../../component/theme/Shadow";
import { useEffect, useRef, useState } from "react";
import { NodeType } from "./NodeType";

function Node({id, nodeType}) {

    const input = useRef(null);

    return (
        <Container onClick={() => input.current && input.current.focus()} className="node" id={id} >
            {nodeType === NodeType.init
            ? <InputContent placeholder="단어를 입력해주세요" ref={input}/>
            : <WordContent>반가워용</WordContent>}
        </Container>
    )
}

const Container = styled.div`
    ${shadow1}
    height: 54px;
    background-color: var(--gray-100);
    border-radius: 8px;
    border: 2px solid var(--gray-200);
    position: absolute;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
`

const Content = css`
    position: relative;
    height: 50%;
    margin: 0 10px;
    text-align: center;
    color: var(--gray-700);
    background-color: transparent;
`

const InputContent = styled.input`
    ${Content}
    outline: none;
    border: none;
`

const WordContent = styled.div`
    ${Content}
`


export default Node;