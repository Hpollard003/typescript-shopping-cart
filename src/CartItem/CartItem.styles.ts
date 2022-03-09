import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial;
    border-bottom: 1px solid bluebird;
    padding-bottom: 20px;


    div {
        flex: 1;
    }

    .info,
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 100px;
        object-fit: cover;
        margin-left: 40px;
    }
`