import styled, { css } from "styled-components";
import { shadow1 } from "../../component/theme/Shadow";

function Node(id) {
    return (
        <Container className="node" id={id}></Container>
    )
}


const NodeStyle = css`
    height: 54px;
    background-color: var(--gray-100);
    border-radius: 8px;
    width: 128px;
    ${shadow1}
    border: 2px solid var(--gray-200);
`

const Container = styled.div`
    ${NodeStyle}
    position: absolute;
    cursor: pointer;
`;


export default Node;