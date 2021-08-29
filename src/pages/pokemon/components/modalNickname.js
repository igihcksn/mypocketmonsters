import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';

const ModalNickname = (props) => {
    const { isOpen, onClose, commonData, artworkData } = props;

    const MyPokemons = localStorage.getItem('myPokemon');

    const [nickname, setNickname] = useState('');

    
    const ClickSave = () => {
        const { data } = commonData;
        const { artWork } = artworkData;
        
        const mock = {
            name: data.name,
            artWork,
            nickname: nickname,
        }

        if(!MyPokemons) {
            localStorage.setItem('myPokemon', JSON.stringify([
                mock
            ]));
        } else {
            const parseData = JSON.parse(MyPokemons);
            localStorage.setItem('myPokemon', JSON.stringify([
                mock,
                ...parseData,
            ]));
        }

        setNickname();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Gatcha, nice throw</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>Do you wanna give the nickname? </p>
                    <Input 
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Pokemon Nickname" />
                </ModalBody>

                <ModalFooter>
                    <Button 
                        onClick={() => ClickSave()}
                        colorScheme="blue" 
                        mr={3}>
                        Save
                    </Button>
                    <Button 
                        variant="ghost" 
                        onClick={() => ClickSave()}>
                        No
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalNickname;