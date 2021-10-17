import styled from '@emotion/styled/macro';
import { PokeballIcon } from 'assets/images';
import { POKEMON_TYPES } from './constants';

export const PokeMainContainer = styled.div`
    font-family: 'Exo 2', sans-serif;
    background-image: linear-gradient(180deg, #f9c921 0%, #19072d);
`;

export const PokeMainContentContainer = styled.div`
    position: relative;
`;

export const MobileNav = styled.div`
    display: none;

    @media (max-width: 420px) {
        display: flex;
        background: rgba(25, 7, 45, 0.9);
        width: 100%;
        height: 80px;
        position: sticky;
        border-radius: 10px 10px 0px 0px;
        bottom: 0;
        z-index: 5;
        padding: 10px;
        box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
    }
`;

export const MobileNavButton = styled.button`
    width: 100%;
    color: #ffffff;
    font-weight: 700;
    padding: 2px 20px;
    border-radius: 10px;
    border: 2px solid #e45b04;
    background-color: ${props => 
        props.active ? '#e45b04' : '#af4417'
    };
    margin: 10px;
    transform: skewX(-10deg);
`;

export const PokeButtonBack = styled.div`
    font-size: 24px; 
    background-color: #ffffff;
    color: #220a3d;
    border-radius: 4px;
    padding: 0px 10px;
    margin: 10px 10px 10px 0px;
    border: 2px solid #220a3d;
    transform: skewX(-10deg);
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
    cursor: pointer;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const PokeButtonBackHeader = styled.div`
    display: none;
    width: 100%;
    padding: 5px;
    font-weight: 600;
    justify-content: flex-start;

    @media (max-width: 420px) {
        display: ${props => 
            props.isList ? 'inline-block' : 'none'
        };
    }
`;

export const PokeNotifCatchFail = styled.div`
    width: 100%;
    color: #ffffff;
    font-weight: 700;
    padding: 2px 20px;
    border-radius: 10px;
    border: 2px solid #e45b04;
    background-color: #af4417;
    margin: 10px;
    transform: skewX(-10deg);
`;

// Header
export const PokeHeaderImg = styled.img({
    // position: 'absolute',
    // top: '2%',
    maxWidth: '500px',
    // position: 'absolute',
    // bottom: '0',
});

export const PokeHeader = styled.header`
    display: flex;
    color: #19072d;
    justify-content: center;
    align-content: center;
    position: relative;

    @media (max-width: 420px) {
        display: inline;
    }
`;

export const PokeHeaderImgContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 30vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 420px) {
        flex-direction: column;
        display: ${props =>
            props.isList ? 'none' : 'flex'
        };
        min-heigh: ${props =>
            props.isList ? '30vh' : '10vh'
        };
    }
`;

export const PokeHeaderLeftSide = styled.div`
    padding: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PokeHeaderTitle = styled.h1`
    color: #6523b6;
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Exo 2',sans-serif;
    text-transform: uppercase;
    font-style: italic;
    text-shadow: 1px 1px 3px rgb(0 0 0 / 30%);

    @media (max-width: 420px) {
        font-size: 2.5rem;
    }
`;

export const PokeHeaderDescription = styled.p`
    color: rgb(23 67 125);
    font-size: 1.5rem;
    font-style: italic;

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`;

export const PokeFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 30vh;
    font-weight: 600;
    background-color: #19072d;
    color: #ffffff;
    padding: 5vh;
    justify-content: space-evenly;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const PokeFilterList = styled.div`
    padding: 1rem;
    display: flex;
    background: #19072d;
    color: #ffffff;
`;

export const PokeFooterLinks = styled.div`
    width: 50%; 
    display: ${props => 
        props.flex ? 'flex' : 'inline'
    }; 
    flex-wrap: ${props =>
        props.wrap ? 'wrap' : 'nowrap'
    };
`;

export const PokeFooterCredits = styled.div`
    width: 100%;
    border-top: 2px solid white;
`;

// Pokemon List

export const PokeListContainer = styled.div`
    background-color: #6523b6;
    min-height: 80vh;
`;

export const PokeBoxList = styled.div({
    backgroundColor: '#19072d',
    border: 'solid #19072d',
    borderRadius: '12px',
    color: '#ffffff',
    display: 'block',
    textDecoration: 'none',
    overflow: 'hidden',
    transformOrigin: 'center 60%',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    position: 'relative',
    cursor: 'pointer',
    ":hover": {
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 40%)',
        transform: 'scale(1.05)',
        zIndex: 1,
    },
});

export const PokeBoxListContainerImage = styled.div`
    border-radius: inherit;
    overflow: hidden;
    position: relative;
    padding: 1rem;
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    @media (max-width: 420px) {
        height: 200px;
    }
`;

export const PokeBoxInnerBackground = styled.p`
    background: url(${PokeballIcon}) no-repeat;
    background-size: contain;
    height: 300px;
    opacity: 0.4;

    @media (max-width: 420px) {
        height: 200px;
    }
`;

export const PokeBoxListInnerImage = styled.img({
    transition: 'transform 0.2s ease-in-out',
    width: '100%',
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    ":hover": {
        transform: 'scale(1.05)',
    },
});

export const PokeBoxListInnerTitle = styled.p`
    text-align: center;
    padding: 1rem;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Exo 2', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    @media (max-width: 420px) {
        font-size: 16px;
        padding: 0.5rem;
    }
`;

export const PokeBoxListInnerNickname = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Exo 2', sans-serif;
    font-style: italic;
    @media (max-width: 420px) {
        font-size: 14px;
    }
`;

export const PokeBoxListInnerRelease = styled.p`
    background-color: #e45b04;
    padding: 0px 10px;
    color: #ffffff;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    border-radius: 10px;
    border: 2px solid #af4417;
    cursor: pointer;
    transform: skewX(-10deg);
`;

export const PokeButtonLoadMore = styled.div`
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
`;

export const PokeButtonText = styled.p`
    font-size: 24px; 
    background-color: #19072d;
    color: #ffffff;
    border-radius: 4px;
    padding: 0px 10px;
    margin: 10px 0px;
    transform: skewX(-10deg);
    cursor: pointer;
`;

export const PokeContainerList = styled.div`
    position: absolute;
    top: 5%;
`;

// Pokemon details

export const PokeDetailsContainer = styled.div`
    background-image: linear-gradient(180deg, #4a1885 0%, #6523b6, rgba(238,114,33,0) 100%);
    padding: 1rem;
    align-items: center;
    display: flex;
    min-height: 100vh;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`;

export const PokeDetailsImg = styled.img`
    width: 100%;
    max-height: 500px;
    padding: 1rem;

    @media (max-width: 420px) {
        align-self: center;
    }
`;

export const PokeDetailsCommon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const PokeDetailsName = styled.p`
    font-size: 24px; 
    background-color: #f9c921;
    color: #220a3d;
    border-radius: 4px;
    padding: 0px 10px;
    margin: 10px 0px;
    transform: skewX(-10deg);
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;

export const PokeDetailsBoxStatus = styled.div`
    background: #ffffff;
    border-radius: 10px;
    display: ${props =>
        props.flex ? 'flex' : 'inline'
    };
    padding: 1rem;
    margin: 1rem 0px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;

export const PokeDetailsBoxStatusUl = styled.ul`
    padding: 1rem;
    list-style-type: none;
`;

export const PokeDetailsInfo = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`;

export const PokeDetailsSprites = styled.div`
    display: flex;

    @media (max-width: 420px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const PokeDetailTypes = styled.span`
    color: #19072d;
    background-color: ${props =>
        props.type ? POKEMON_TYPES[props.type] : '#19072d'
    };
    border: 1px solid #19072d;
    transform: skewX(-10deg);
    margin-left: 5px;
    padding: 0px 2px;
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
`;

export const PokeDetailsAbilitiesMoves = styled.span`
    margin: ${props => 
        props.type === 'move' ? '2px 0px' : 0
    };
    color: #ffffff;
    font-weight: 600;
    background-color: #19072d;
    border: 1px solid #19072d;
    margin-left: 5px;
    padding: 0px 2px;
    border-radius: 4px;
    display: inline-block;
`;

export const PokeDetailsStats = styled.p`
    text-transform: uppercase;
`;

export const PokeDetailsLeftImage = styled.div`
    display: flex;
    align-self: flex-start;
    justify-conteng: center;
    flex-direction: column;
    width: 100%;
`;

export const PokeDetailsCatch = styled.div`
    color: #ffffff;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 20px;
    border: 2px solid #e45b04;
    background-color: #af4417;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    transform: skewX(-10deg);
    margin: 10px;
`;

export const PokeDetailsActions = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const PokeDetailsBallImg = styled.img`
    transition: transform 0.2s ease-in-out;
    margin-right: 10px;

    &:hover + ${PokeDetailsCatch} {
        transform: rotate(180deg);
    }
`;

export const PokeDetailTitleSection = styled.p`
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
`;

// Trainer Info

export const PokeTrainerContainer = styled.div`
    background-image: linear-gradient(180deg, #4a1885 0%, #6523b6, rgba(238,114,33,0) 100%);
    padding: 1rem;
    align-items: center;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

export const PokeTainerContentContainer = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`;

export const PokeTrainerInfoLeft = styled.div`
    background-color: #ffffff;
    color: #19072d;
    border-radius: 20px;
    padding: 10px;
    align-self: flex-start;
    display: flex;
    margin: 10px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;

export const PokeTrainerInfoRight = styled.div`
    width: 100%;
    flex-direction: column;
    align-self: flex-start;
    margin: 10px;

    @media (max-width: 420px) {
        align-self: center;
    }
`;

export const PokeTrainerName = styled.ul`
    background-color: #ffffff;
    color: #19072d;
    border-radius: 10px;
    padding: 10px;
    list-style-type: none;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;

export const PokeTrainerTitle = styled.div`
    display: flex;
`;

export const PokeTrainerTitleSection = styled.p`
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    margin: 10px 0px;
`;

export const PokeTrainerList = styled.ul`
    background-color: #ffffff;
    color: #19072d;
    border-radius: 10px;
    padding: 10px;
    list-style-type: none;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;
