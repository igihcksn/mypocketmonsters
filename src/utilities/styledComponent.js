import styled from '@emotion/styled';
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
        background: #19072d;
        width: 100%;
        height: 80px;
        position: sticky;
        border-radius: 10px 10px 0px 0px;
        bottom: 0;
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
    width: 100%;
    height: auto;
    min-height: 30vh;
    color: purple;
    justify-content: center;
    align-content: center;
    position: relative;

    @media (max-width: 420px) {
        flex-direction: column;
        display: ${props =>
            props.isHidden ? 'none' : 'flex'
        };
    }
`;

export const PokeFilterList = styled.div`
    padding: 1rem;
    display: flex;
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
    }
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

export const PokeDetailsLeftImage = styled.div`
    display: flex;
    align-self: flex-start;
    justify-conteng: center;
    flex-direction: column;
    width: 100%;
`;

export const PokeDetailsCatch = styled.button`
    color: #ffffff;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 20px;
    border: 2px solid #e45b04;
    background-color: #af4417;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const PokeDetailTitleSection = styled.p`
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
`;
