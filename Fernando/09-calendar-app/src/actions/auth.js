import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import { eventLogut } from "./events";

export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST');
        const { ok, token, uid, name, msg } = await resp.json();

        if( ok ) {
            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid,
                name 
            }));
        } else {
            Swal.fire('Error', msg, 'error' );
        }
    }
}

export const startRegister = ( email, password, name ) => {
    return async ( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST');
        const { ok, token, uid, name:displayName, msg } = await resp.json();

        if( ok ) {
            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid,
                name: displayName
            }));
        } else {
            Swal.fire('Error', msg, 'error' );
        }
    }
}

export const startChecking = () => {
    return async ( dispatch ) => {

        const resp = await fetchConToken( 'auth/renew');
        const { ok, token, uid, name:displayName, msg } = await resp.json();

        if( ok ) {
            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid,
                name: displayName
            }));
        } else {
            Swal.fire('Error', msg, 'error' );
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogut = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( eventLogut() );
        dispatch( logut() );
    }
}

const logut = () => ({ type: types.authLogout });