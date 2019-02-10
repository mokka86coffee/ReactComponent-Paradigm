let obj = {
    a: 1,
    b: 2
}

/*global Proxy*/

let proxy = new Proxy(obj, {
    get(target, name){
        return target[name];
    },
    set(){

    }
});

console.log(proxy.a);
//proxy

import {Cart} from './src/cart';

let cart = new Cart({tag: 'div', children: []});
cart.create();
