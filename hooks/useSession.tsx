import axios from 'axios';
import { AppContext } from '@/components/context/appContext';
import { useContext, useEffect, useState } from 'react';

export const useSession = () => {
	const [isLogged, setIsLogged] = useState(false);
	const [jwt, setJwt] = useState('');
	const { setLoading } = useContext(AppContext);
	useEffect(() => {
		setLoading(true);
		const localJWT = localStorage.getItem('jwt');
		setJwt(localJWT ? localJWT : '');
		if (jwt) {
			( () => {
				try {
                    const localJWT = localStorage.getItem("jwt");
                    if (localJWT == null || localJWT?.length == 0) {
						setIsLogged(false);
						return;
					}
					setIsLogged(true)
				} catch (error) {
					setIsLogged(false);
				}
			})();
		}else{
			setIsLogged(false)
		}
		setLoading(false);
	}, [jwt,  setLoading]);

	const logOut = () => {
		setJwt('');
		localStorage.removeItem('jwt');
	};
	const logIn = (jwt: string) => {
		setJwt(jwt);
		localStorage.setItem('jwt', jwt);
	};

	return {
		jwt,
		isLogged,
		logIn,
		logOut,
	};
};