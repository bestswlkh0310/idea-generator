import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Home/Nav/Nav';
import Home from './Home/Home';

export default function App() {

    return (
        <Container>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/support" element={<Home/>} />
                    <Route path="/contact" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`