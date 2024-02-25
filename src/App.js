import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './UI/Nav/Nav';
import Idea from './UI/Idea/Idea';
import { NavList } from './util/Constant';

export default function App() {

    return (
        <Container>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    {NavList.map((nav, index) => {
                        return <Route key={index} path={nav.path} element={nav.element}/>
                    })}
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`