import styled from '@emotion/styled';

// Header
export const PokeHeaderImg = styled.img({
    position: 'absolute',
    top: '2%',
});

export const PokeHeader = styled.header(props => ({
  display: 'flex',
  width: '100%',
  height: 'auto',
  minHeight: '50vh',
  color: 'purple',
  backgroundColor: 'grey',
  justifyContent: 'center',
  alignContent: 'center'
}));

// Pokemon List

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
    font-family: 'Exo 2', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    background-color: #6523b6;
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