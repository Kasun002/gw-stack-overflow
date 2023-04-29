import { useState } from 'react';
import { RandomNameHook } from '../utils/Interfaces';
import { firstNames, lastNames } from '../utils/Options';

const useRandomName = (): RandomNameHook => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const generateName = async () => {
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        setFirstName(randomFirstName);
        setLastName(randomLastName);
    };

    return { firstName, lastName, generateName };
};

export default useRandomName;