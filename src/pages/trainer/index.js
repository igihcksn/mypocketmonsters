import { Trainer } from "assets/images";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { URL } from "utilities/constants";
import {
  PokeTrainerInfoLeft,
  TrainerImage,
  PokeTrainerInfoRight,
  PokeTrainerName,
  PokeDetailsName,
  PokeTrainerTitle,
  PokeTrainerContainer,
  PokeTainerContentContainer,
  PokeTrainerTitleSection,
  PokeTrainerList,
  PokeBoxList,
  PokeBoxInnerBackground,
  PokeBoxListContainerImage,
  PokeBoxListInnerImage,
  PokeBoxListInnerTitle,
  PokeButtonBack,
  PokeBoxListInnerNickname,
  PokeBoxListInnerRelease,
} from "utilities/styledComponent";
import { SimpleGrid } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getUserData } from "utilities/utility";

const TrainerDetails = () => {
  const history = useHistory();

  const [pokemonData, setPokemonData] = useState([]);
  const [randomUser, setRandomUser] = useState(null);

  useEffect(() => {
    setPokemonData(JSON.parse(localStorage.getItem("myPokemon")));
  }, []);

  useEffect(() => {
    getUserData()
      .then((res) => {
        setRandomUser({
          name: `${res.results[0].name.first} ${res.results[0].name.last}`,
          age: res.results[0].dob.age,
          gender: res.results[0].gender,
          city: res.results[0].location.city,
          phone: res.results[0].phone,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickList = (pokemon) => {
    history.push({
      pathname: URL.POKEMON_DETAILS.replace(":slug", pokemon),
    });
  };

  const releasePokemon = (list) => {
    pokemonData.splice(pokemonData.indexOf(list), 1);

    localStorage.setItem("myPokemon", JSON.stringify(pokemonData));
    setPokemonData([...pokemonData]);
  };

  return (
    <PokeTrainerContainer>
      <PokeTrainerTitle>
        <PokeButtonBack onClick={() => history.push(URL.POKEMON_LIST)}>
          <ArrowBackIcon /> Back
        </PokeButtonBack>
        <PokeDetailsName>Trainer Information</PokeDetailsName>
      </PokeTrainerTitle>
      <PokeTainerContentContainer>
        <PokeTrainerInfoLeft>
          <TrainerImage src={Trainer} alt="trainer"></TrainerImage>
        </PokeTrainerInfoLeft>
        <PokeTrainerInfoRight>
          <PokeTrainerName>
            <li>NAME: {randomUser ? randomUser.name : "loading.."}</li>
            <li>AGE: {randomUser ? randomUser.age : "loading.."}</li>
            <li>GENDER: {randomUser ? randomUser.gender : "loading.."}</li>
            <li>HAIR: BLACK</li>
            <li>HOMETOWN: {randomUser ? randomUser?.city : "loading.."}</li>
            <li>PHONE: {randomUser ? randomUser.phone : "loading.."}</li>
            <li>POKEMON: {pokemonData ? pokemonData.length : 0}</li>
          </PokeTrainerName>
          <PokeTrainerTitleSection>List Pokemon</PokeTrainerTitleSection>
          <PokeTrainerList>
            <SimpleGrid columns={[2, null, 5]} spacing={5} p={5}>
              {pokemonData &&
                pokemonData.map((list, index) => (
                  <PokeBoxList key={index}>
                    <PokeBoxListInnerRelease
                      onClick={() => releasePokemon(list)}
                    >
                      Release ?
                    </PokeBoxListInnerRelease>
                    <PokeBoxListContainerImage>
                      <PokeBoxInnerBackground />
                      <PokeBoxListInnerImage
                        src={list.artWork.dream_world.front_default}
                        alt={list.name}
                        loading="lazy"
                      />
                    </PokeBoxListContainerImage>
                    <PokeBoxListInnerTitle
                      onClick={() => onClickList(list.name)}
                    >
                      {list.name}
                    </PokeBoxListInnerTitle>
                    <PokeBoxListInnerNickname>
                      Nickname : {list.nickname}
                    </PokeBoxListInnerNickname>
                  </PokeBoxList>
                ))}
              {!pokemonData && <p>Empty...</p>}
            </SimpleGrid>
          </PokeTrainerList>
        </PokeTrainerInfoRight>
      </PokeTainerContentContainer>
    </PokeTrainerContainer>
  );
};

export default TrainerDetails;
