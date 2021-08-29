import React, { lazy, Suspense, useContext, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { URL } from 'utilities/constants';
import { ChakraProvider } from '@chakra-ui/react';
import Header from 'pages/pokemon/components/header';
import Footer from 'pages/pokemon/components/footer';
import { PokeThemeProvider } from 'utilities/theme';
import { 
  MobileNav, 
  MobileNavButton, 
  PokeMainContainer, 
  PokeMainContentContainer, 
} from 'utilities/styledComponent';
import { PokeContext } from 'utilities/context';
import ModalNickname from 'pages/pokemon/components/modalNickname';

// import components
const PokemonList = lazy(() => import("../pokemon"));
const PokemonDetails = lazy(() => import("../pokemon/details"));
const TrainerInfo = lazy(() => import("../trainer"));

const NotFound = () => (
    <p>Not Found</p>
);

const MainLayout = () => {
  const history = useHistory();
  const { 
    pokemonDetailData,
    pokemonDetailArtwork,
    randomTry, 
  } = useContext(PokeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickMenu = (path) => {
    history.push(path);
  }

  const CatchPokemon = () => {
    const ThrowPokeball = randomTry();

    if (ThrowPokeball) {
        setIsModalOpen(true)
    }
}

  return (
    <>
      <ChakraProvider theme={PokeThemeProvider}>
      <PokeMainContainer>
          <Header isList={history.location.pathname !== URL.POKEMON_LIST} />

          <PokeMainContentContainer>
            <Suspense fallback={<span>Loading items...</span>}>
                <Switch>
                    <Route path={URL.POKEMON_LIST} component={PokemonList} exact />
                    <Route path={URL.POKEMON_DETAILS} component={PokemonDetails} />
                    <Route path={URL.TRAINER_INFO} component={TrainerInfo} />

                    <Route component={NotFound} />
                </Switch>
            </Suspense>   
          </PokeMainContentContainer>

          <MobileNav>
              <MobileNavButton 
                active={history.location.pathname === URL.POKEMON_LIST} 
                onClick={() => clickMenu(URL.POKEMON_LIST)}>Home</MobileNavButton>
              <MobileNavButton 
                hidden={(history.location.pathname === URL.POKEMON_LIST || history.location.pathname === URL.TRAINER_INFO)} 
                onClick={() => CatchPokemon()}>Catch</MobileNavButton>
              <MobileNavButton 
                active={history.location.pathname === URL.TRAINER_INFO} onClick={() => clickMenu(URL.TRAINER_INFO)}>MyList</MobileNavButton>
          </MobileNav>

          <ModalNickname 
              isOpen={isModalOpen}  
              onOpen={() => setIsModalOpen(true)} 
              onClose={() => setIsModalOpen(false)} 
              commonData={pokemonDetailData}
              artworkData={pokemonDetailArtwork} />
        </PokeMainContainer>

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MainLayout;
