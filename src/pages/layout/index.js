import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL } from 'utilities/constants';
import {
    Box,
    Button,
    ChakraProvider,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Header from 'pages/pokemon/components/header';
import { PokeThemeProvider } from 'utilities/theme';
import { motion } from "framer-motion"
import { PokeMainContainer, PokeMainContentContainer } from 'utilities/styledComponent';
import { PokeProvider } from 'utilities/context';

// import components
const PokemonList = lazy(() => import("../pokemon"));
const PokemonDetails = lazy(() => import("../pokemon/details"));
const TrainerInfo = lazy(() => import("../trainer"));

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Button ref={btnRef} onClick={onOpen} variant="poke-dark-orange">
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <p>Body...</p>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
};

const NotFound = () => (
    <p>Not Found</p>
);

const MainLayout = () => (
  <PokeProvider>
    <ChakraProvider theme={PokeThemeProvider}>
    <PokeMainContainer>
        <Header />

        <motion.div exit={{ opacity: 0 }}>
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
        </motion.div>
      </PokeMainContainer>
    </ChakraProvider>
  </PokeProvider>
);

export default MainLayout;
