import {Input} from './input';
import {Paradigm, JSXTransform} from './Paradigm';

export class Cart extends Paradigm {
    constructor(params) {
        super(params);
        this.currentParams = {
            total: 0,
            stuff: [
                {
                    title: 't-shirts',
                    price: 1000,
                    count: 6,
                    current: 0
                },
                {
                    title: 'shirts',
                    price: 2000,
                    count: 11,
                    current: 0
                }
            ]
        }
    }

    _changeCurrent(index, value){
        let stuff = this.currentParams.stuff;
        stuff[index].current = value;
        const newState = {...this.currentParams, ...{stuff}};
        this.setState(newState);
        this.create();
    }
    
    create() {
        let htmlArr = this.currentParams.stuff.map( (el,i)=> 
            (new Input(
                {
                    current: el.current,
                    max: el.count,
                    title: el.title
                }, 
                {
                    onchange: this._changeCurrent.bind(this,i)
                })
            ).render() 
        );
        let total = Object.values(this.currentParams.stuff).reduce((total, el)=> total+el.price*el.current,0);
        htmlArr.push(<p>{`${total} рублей`}</p>);
        super.create(htmlArr);
    }
}