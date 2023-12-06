import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor.carta";

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos para que la computadora gane
 * @param {HTMLElement} puntosHTML delemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios'); 
    if (!puntosHTML) throw new Error('Argumento puntoHTML es necesario'); 
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        divCartasComputadora.append( crearCartaHTML(carta) );

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

