export class Paradigm {
    constructor(params) {
        this.params = params;
        this.currentParams = {};
    }

    setState(newState){
        Object.assign(this.currentParams, this.currentParams, newState);
    }

    create(arrayNodes) {
        this.params.children  = arrayNodes;
        let node = <this.params.tag />;
        if( this.params.children ) {
            this.params.children.forEach(element => 
                node.append(element)
            )
        }
        createNode(node);
    }
}

function createNode(node) {
    let creatingNode = document.querySelector('#main');
    creatingNode.innerHTML = '';
    creatingNode.append(node);
}

//JSX transform

export function JSXTransform(tag, attrs, ...children) {
    let node = typeof (tag) === 'function' 
        ? (new tag()).render()
        : document.createElement(tag); 

    for (let attr in attrs) { 
        if ((/^(data|aria)/g).test(attr)) { node.setAttribute(attr,attrs[attr]); }
        else { Object.assign( node, {[attr]:attrs[attr]} ) }
    } 

    children.forEach(elem=>{
        if (typeof (elem) === 'string') {
            node.append(document.createTextNode(elem))
        }  else { node.append(elem) }
    });

    return node;
}
