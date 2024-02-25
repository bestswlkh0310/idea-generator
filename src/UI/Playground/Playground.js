import { useEffect } from "react";
import styled from "styled-components";

function Playground() {

    // 드래그 앤 드롭 기능을 구현할 함수
    function dragElement(elmnt) {
        const dragMouseDown = (e) => {
            e = e || window.event;
            e.preventDefault();
            // 마우스를 클릭한 위치의 현재 x, y 좌표를 가져옴
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = () => {
                document.onmouseup = null;
                document.onmousemove = null;
            };
            document.onmousemove = (e) => {
                e = e || window.event;
                e.preventDefault();
                // 마우스를 이동한 만큼 노드의 위치를 조정
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // if (elmnt.offsetTop - pos2 < 0) return;
                // if (elmnt.offsetLeft - pos1 < 0) return;
                
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            };
        }
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id)) {
            document.getElementById(elmnt.id).onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }
        console.log(elmnt);
    }

    useEffect(() => {
        const nodes = document.getElementsByClassName("node");
        for (let i = 0; i < nodes.length; i++) {
            dragElement(nodes[i]);
        }
    }, []);

    return (
        <Container>
            <Node className="node" id="node1"></Node>
            <Node className="node" id="node2"></Node>
            <Node className="node" id="node3"></Node>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
`;

const Node = styled.div`
    background-color: blue;
    position: absolute;
    cursor: pointer;
    width: 100px;
    height: 100px;
`;

export default Playground;