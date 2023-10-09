import styled from 'styled-components';

const StyledSection = styled.section`
`;

const StyledDiv = styled.div`
    .scroll-down-arrow {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsElEQVR4nO3czWrbQBRA4ZO/JwkJpZtALsF55mYRShfuKn2b7BIPgbS0FBwC8sbUdSWb+s7M+WB25iLm6AcEMkiSJEmSJEmSJEmSJEmSJI7cg52cASfswRXwFfgB/AS+AB/2MbgTH4E58Bv4BXwDbnaJ8QIs19YCmO33uJs0G/Zqff9egZgycP6HYatVjLI1RvnL/j0w0vFwm9o00CjTYyyH29cpI33fMtQo02Ish+fxaPf/MNgo42O8r89McL7hoWSU3WIshr2d5Bp4GhHllv4E8Pw/T1yjJIqxYpREMVaMkijGilHIE8Mo5IvRc5TIGqPHKJE9Rk9RopYYPUSJ2mK0HCVqjdFilKg9RktRopUYLUSJ1mLUHCVajVFjlGg9Rk1RopcYNUSJ3mJkjhK9xsgYJXqPkSlKGCNPlDBGnihhjDxRwhh5ooQx8kQJY+SJEsbIEyWMkSdKGCNPlDBGnihhjDzfXJSRv2323VSmK2VpjLqiFK+MPFGKMfJEKcbIE6UYI0+UYow8UYox8vy5y8IYh3MJ3AGPw/oEXBzweCRJkiRJkiRJkiRJkiRJkqjHGybssuE5Q47nAAAAAElFTkSuQmCC);
        background-size: contain;
        background-repeat: no-repeat;
    }

    .scroll-down-link {
        position: absolute;
        z-index: 100;
        cursor:pointer;
        height: 200px;
        width: 100px;
        margin: 0px 0px 0px -50px;
        line-height: 60px;
        left: 50%;
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

    .hide {
        opacity:0;
        display: none;
    }

    #scrollArrow {
        top: 85%;
    }
`

const StyledHeader = styled.h2`
    color: #413F3D;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 60px;
    margin-top: inherit;
`;

const StyledDate = styled.h3`
    font-family: Montserrat, sans-serif;
    color: #B1A6A4;
`;

const StyledImage = styled.img`
    animation: fadeIn 5s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const StyledBody = styled.h4`
    color: #56514F;
    font-family: 'Raleway', sans-serif;
`;

const StyledArrow = styled.div`
    .down-arrow {
        position: absolute;
        top: calc(100vh - 60px);
        left: calc(50% - 14px);
        width: 0;
        height: 30px;
        border: 2px solid;
        border-radius: 2px;
        animation: jumpInfinite 1.5s infinite;
    }
    
    .down-arrow:after {
        content: " ";
        position: absolute;
        top: 12px;
        left: -10px;
        width: 16px;
        height: 16px;
        border-bottom: 4px solid;
        border-right: 4px solid;
        border-radius: 4px;
        transform: rotateZ(45deg);
    }

    @keyframes jumpInfinite {
        0% {
            margin-top: 0;
        }
        50% {
            margin-top: 20px;
        }
        100% {
            margin-top: 0;
        }
    }
`;


export { StyledHeader, StyledDate, StyledImage, StyledBody, StyledArrow, StyledSection,StyledDiv };
