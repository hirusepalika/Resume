import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 550px;
    position: absolute; 
    top: 10%;

    li {
        width: 500px;
        word-wrap: break-word;
        word-break: break-word;
    }

    .truncated {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
        max-width: 500px;
        list-style-type: square;
    }

    .truncated:hover{
        overflow: visible;        // this makes the overflowing text visible on hover
        white-space: normal;
        height:auto;
        list-style-type: square;
    }

    .scroll-down-arrow {
        background-size: contain;
        background-repeat: no-repeat;
    }

    .scroll-down-link {
        color: black;
        margin-left: 100px;
        position: relative;
        z-index: 100;
        cursor:pointer;
        height: 200px;
        width: 100px;
        margin: 0px 0px 0px -50px;
        line-height: 60px;
        left: 50px;
        bottom: 10px;
        text-align: center;
        font-size: 70px;
        text-decoration: none;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
        -webkit-animation: fade_move_down 2s ease-in-out infinite;
        -moz-animation:    fade_move_down 2s ease-in-out infinite;
        animation:         fade_move_down 2s ease-in-out infinite;
        /*animated scroll arrow animation*/
        @-webkit-keyframes fade_move_down {
            0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
            50%  { opacity: 1;  }
            100% { -webkit-transform:translate(0,20px); opacity: 0; }
        }
        @-moz-keyframes fade_move_down {
            0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
            50%  { opacity: 1;  }
            100% { -moz-transform:translate(0,20px); opacity: 0; }
        }
        @keyframes fade_move_down {
            0%   { transform:translate(0,-20px); opacity: 0;  }
            50%  { opacity: 1;  }
            100% { transform:translate(0,20px); opacity: 0; }
        }
    }

    #scrollArrow {
        top: 100%;
    }

    .hide {
        opacity:0;
        display: none;
    }

    .icon-style{
        /* background-color: #551B54; */
        /* border: 2px solid #fff;
        border-radius: 50%; */
        /* border: 2px solid #fff; */
        height: 60px;
        width: 60px;
        color: black;
        cursor: pointer;
        animation: movebtn 5s ease-in-out infinite;
        transition: all .5s ease-in-out;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    @keyframes movebtn {
        0%{
            transform: translateY(0px);
        }
        25%{
            transform: translateY(20px);
        }
        50%{
            transform: translateY(0px);
        }
        75%{
            transform: translateY(-20px);
        }
        100%{
            transform: translateY(0px);
        }
    }
`
const StyledTitle = styled.h1`
    font-size: 35px;
    font-weight: 1;
    color: #56514F;
    font-family: Raleway, sans-serif;
    width: 500px;
    word-wrap: break-word;
    word-break: break-word;
`
const StyledHeader = styled.h1`
    font-size: 50px;
    font-weight: 1;
    color: #413F3D;
    font-family: 'Caveat', cursive;
    background-color: #FFFF00;
`

const StyledImage = styled.img`
    border-radius: 50%;
    width: 500px;
    height: 500px;
    box-shadow: 1px 1px 20px 1px black;
    background-position: center;
    background-size: auto 80px;
    margin-left: 20px;
    margin-top: 20px;
`;

const StyledList = styled.li`
    li {
        font-size: 18px;
        color: lightslategray;
    }
`;

export { StyledContainer, StyledTitle, StyledImage, StyledList, StyledHeader };