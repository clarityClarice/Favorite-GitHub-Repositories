import styled from 'styled-components'

export const Loading = styled.div`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
        color: pink;
        font-size: 16px;
        text-decoration: none;
    }

    img{
        width: 120px;
        border-radius: 50%;
        margin-top: 10%;
    }

    h1 {
            font-size: 24px;
            margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid pink;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid pink;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid pink;
        }

        div {
            flex: 1;
            margin-left: 15px;

            strong{
                font-size: 16px;

                a{
                    text-decoration: none;
                    color: #333;

                    &:hover{
                        color: pink;
                    }
                }
                span {
                    background: lightblue;
                    color: #333;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    height: 20px;
                    padding: 3px 4px;
                    margin-left: 2px;
                }
            }
            p {
                margin-top: 5px;
                font-size: 12px;
                color: lightblue;
            }
        }
    }
`