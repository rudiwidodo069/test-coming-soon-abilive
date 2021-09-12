import styled, { keyframes } from 'styled-components';

/*
    # Navbar
*/

export const Header = styled.header`
    width : 100%;
    height : 60px;
    box-shadow : 0 0 3px rgba(0,0,0,0.3);
    position : fixed;
    background-color : ${props => props.background};
    z-index : 2;
`;

export const Navbar = styled.nav`
    width : 80%;
    height : 100%;
    margin : 0 auto;
    display :flex;
    justify-content : space-between;
    align-items : center;
    padding : 0;

    @media (max-width : 678px){
        width :100%;
        padding : 0 20px;
    }
`;

export const Logo = styled.img`
    width : 50px;
`;

export const NavMenu = styled.ul`
    display : flex;

    @media(max-width : 678px){
        display : none;
    }
`;

export const NavList = styled.li`
    list-style : none;
    margin : 0 8px;
    cursor: pointer;
`;

export const NavLink = styled.a`
    font-size : 16px;
    text-decoration : none;
    color : #0102ad;
    font-weight : 600;
`;

export const MobileNav = styled.div`
    color : #0102ad;
    display : none;

    @media(max-width : 678px){
        display : block;
        font-size : 26px;
    }
`;

const NavAnimated = keyframes`
    from {
        top : 0;
    } to {
        bottom : 0;
    }
`;

export const MobileNavMenu = styled.ul`
        position : fixed;
        top : 0;
        left : 0;
        width : 100%;
        height : 100vh;
        background : linear-gradient(
    150deg
    , #281483 15%, #8f6ed5 70%, #d782d9 94%);
    `;

export const MobileCloseNav = styled.div`
    animation : ${NavAnimated} .3s linear;
    position : absolute;
    top : 20px;
    right : 20px;
    font-size : 28px;
    color : #fff;
`;

/*
    # Hero Section
*/

export const SectionHero = styled.section`
    width : 100%;
    height : 100vh;
`;

export const Hero = styled.div`
    width : 100%;
    height : 100%;
    background : linear-gradient(
150deg
, #281483 15%, #8f6ed5 70%, #d782d9 94%);
`;

const animated = keyframes`
    0% {
        transform : scale(1);
    }
    50% {
        transform : scale(1.5);
    }
    100% {
        transform : scale(1);
    }
`;

export const Shape = styled.div`
    width : 100%;
    height : 100%;
    position : relative;
    overflow : hidden;
    & :nth-child(1){
        top : 40px;
        left : -50px;
        width : 150px;
        height : 150px;
        animation : ${animated}  2.5s infinite ;
    }
    & :nth-child(2){
        top : 190px;
        left : 20%;
        width : 80px;
        height : 80px;
        animation : ${animated}  2.5s infinite ;
    }
    & :nth-child(3){
        top : 500px;
        left : 10%;
        width : 150px;
        height : 150px;
        animation : ${animated}  2.5s infinite ;
    }
    & :nth-child(4){
        top : 300px;
        left : 60%;
        width : 150px;
        height : 150px;
        animation : ${animated}  2.5s infinite ;
    }
    & :nth-child(5){
        top : 240px;
        right : 17%;
        width : 80px;
        height : 80px;
        animation : ${animated}  2.5s infinite ;
    }
    & :nth-child(6){
        top : 150px;
        right: -50px;
        width : 150px;
        height : 150px;
        animation : ${animated}  2.5s infinite ;
    }
    & :nth-child(7){
        top : 100px;
        left : 55%;
        width : 80px;
        height : 80px;
        animation : ${animated}  2.5s infinite ;
    }

    @media (max-width : 768px){
        & :nth-child(7){
            display : none;
        }
        & :nth-child(6){
            display : none;
        }
        & :nth-child(5){
            top : 50px;
            right : 10%;
        }
        & :nth-child(2){
            left : 35%;
        }
        
    }
`;

export const ShapeCircle = styled.span`
    position : absolute;
    border-radius : 50%;
    background-color : rgba(255, 255, 255, 0.3);
`;

export const WaveHero = styled.div`
    & svg {
        position : absolute;
        bottom : 0;
        left : 0;
        width : 100%;

        @media (max-width : 678px){
            bottom : -1rem;
        }
    }
`;

export const HeroContent = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    position : absolute;
    top : 0;
    left : 0;
`;

export const HeroTitle = styled.div`
    padding : 20px 10px;
    text-align : center;
    font-weight : bold;
    margin-bottom : 20px;
    color : rgba(255, 255, 255, 0.8);

    & h3 {
        font-size : 48px;
        letter-spacing : 5px;
        margin-bottom :10px;
    }

    & p {
        font-size : 24px;
    }

    @media(max-width : 678px){
        margin-bottom : 10px;
        h3 {
            font-size : 28px;
        }
        p {
            font-size : 20px;
        }
    }
`;

export const HeroCutdown = styled.div`
    width : 100%;
    height : 180px;
    display : flex;
    justify-content : center;
`;

export const CutdownTimer = styled.div`
    width : 150px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 5px;
    background-color : rgba(255, 255, 255, 0.6);
    border-radius : 24px;
    font-size : 60px;
    font-weight : 700;
    box-shadow : 0 3px 2px rgba(0,0,0,0.4);

    & span {
        font-size : 20px;
        letter-spacing : 2px;
    }

    @media (max-width : 678px){
        font-size : 18px;
        width : 80px;
        height : 80px;
        position : relative;
        border-radius : 50%;
        & span {
            position : absolute;
            color : rgba(255, 255, 255, 0.9);
            bottom : -2rem;
            font-size : 14px;
        }
    }
`;

/*
    # Recruitment section
*/

export const RecruitmentSection = styled.section`
    padding-top : 4.5rem;
    padding-bottom : 2rem;
    width : 100%;
    height : 100vh;
`;

export const RecruitmentContainer = styled.div`
    width : 80%;
    margin : 0 auto;

    @media (max-width : 678px){
        width :100%;
        padding : 0 20px;
    }
`;

export const RecruitmentTitle = styled.h3`
    font-size : 28px;
    font-weight : 700;
    text-align : center;

    @media (max-width : 678px){
        font-size : 20px;
    }
`;

/*
    # Contact
*/

export const ContactSection = styled.section`
    width : 100%;
    height : 100vh;

    @media (max-width : 678px){
        height : 100%;
    }
`;

export const Contact = styled.div`
    width : 100%;
    height : 100%;
    background : linear-gradient(
    150deg
    , #281483 15%, #8f6ed5 70%, #d782d9 94%);
    padding-top : 4.5rem;
    padding-bottom : 2rem;
    position : relative;
`;

export const WaveContactTop = styled.div`
    & svg {
        position : absolute;
        top : -3.5rem;
        left : 0;
        z-index : 1;
        width : 100%;

        @media (max-width : 678px){
            top : -1rem;
        }
    }
    
`;

export const WaveContactBottom = styled.div`
    & svg {
        position : absolute;
        bottom : -2.5rem;
        left : 0;
        width : 100%;
        transform : rotate(180deg);

        @media (max-width : 678px){
            bottom : -1rem;
        }
    }
`;

export const ContactContainer = styled.div`
    width : 80%;
    height : 100%;
    margin : 0 auto;
    position : relative;
    z-index : 1;
`;

export const ContactTitle = styled.h3`
    font-size : 28px;
    font-weight : 700;
    text-align : center;
    color : #fff;

    @media (max-width : 678px){
        font-size : 20px;
    }
`;

export const ContactGrid = styled.div`
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    gap : 1rem;
    margin-top : 4rem;

    @media (max-width : 991px){
        grid-template-columns : repeat(2, 1fr);
    }

    @media (max-width : 678px){
        grid-template-columns : 1fr;
    }
`;

export const ContactBox = styled.div`
    width : 100%;
    padding : 20px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow : 0 0 2px rgba(0,0,0,0.4);
    border-radius : 14px;
    text-align : center;

    & .icon {
        color : #3f37c9;
        font-size : 28px;
    }

    & p {
        margin : 20px 0 10px;
    }

     & :nth-child(2){
        font-size : 18px;
        color : #adb5bd;
        letter-spacing : 2.5px;
     }

     & :nth-child(3){
         font-size : 14px;
     }
`;

/*
     # Footer
*/

export const FooterSection = styled.section`
    width : 100%;
    height : 80px;
    font-size : 18px;
    padding : 0 10px;
    position : relative;
    display : flex;
    justify-content : center;
    align-items : center;
     text-align : center;

     & .footer-abilive {
         font-weight : 600;
     }

    & .fotter-link {
        color : #3f37c9;
    }
`;