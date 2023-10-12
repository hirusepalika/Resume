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
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsElEQVR4nO3czWrbQBRA4ZO/JwkJpZtALsF55mYRShfuKn2b7BIPgbS0FBwC8sbUdSWb+s7M+WB25iLm6AcEMkiSJEmSJEmSJEmSJEmSJI7cg52cASfswRXwFfgB/AS+AB/2MbgTH4E58Bv4BXwDbnaJ8QIs19YCmO33uJs0G/Zqff9egZgycP6HYatVjLI1RvnL/j0w0vFwm9o00CjTYyyH29cpI33fMtQo02Ish+fxaPf/MNgo42O8r89McL7hoWSU3WIshr2d5Bp4GhHllv4E8Pw/T1yjJIqxYpREMVaMkijGilHIE8Mo5IvRc5TIGqPHKJE9Rk9RopYYPUSJ2mK0HCVqjdFilKg9RktRopUYLUSJ1mLUHCVajVFjlGg9Rk1RopcYNUSJ3mJkjhK9xsgYJXqPkSlKGCNPlDBGnihhjDxRwhh5ooQx8kQJY+SJEsbIEyWMkSdKGCNPlDBGnihhjDzfXJSRv2323VSmK2VpjLqiFK+MPFGKMfJEKcbIE6UYI0+UYow8UYox8vy5y8IYh3MJ3AGPw/oEXBzweCRJkiRJkiRJkiRJkiRJkqjHGybssuE5Q47nAAAAAElFTkSuQmCC);
        background-size: contain;
        background-repeat: no-repeat;
    }

    .scroll-down-link {
        /* position: absolute; */
        margin-left: 100px;
        position: relative;
        z-index: 100;
        cursor:pointer;
        height: 200px;
        width: 100px;
        margin: 0px 0px 0px -50px;
        line-height: 60px;
        left: 30%;
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
`
const StyledTitle = styled.h1`
    font-size: 35px;
    font-weight: 1;
    color: #56514F;
    font-family: 'Caveat', cursive;
    width: 500px;
    word-wrap: break-word;
    word-break: break-word;
`
const StyledHeader = styled.h1`
    font-size: 50px;
    font-weight: 1;
    color: #413F3D;
    font-family: 'Caveat', cursive;
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