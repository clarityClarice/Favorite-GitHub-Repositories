import styled from 'styled-components'

export const Container = styled.div`
    max-width: 700px;
    background: #F5F5F5;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: 10px;
        }
    }
`