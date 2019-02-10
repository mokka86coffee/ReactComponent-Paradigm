import {JSXTransform} from './Paradigm';

export class Input{
    constructor(params, funcObj) {
        this.funcs = funcObj;    
        this.currentParams = {
            value: params.current,
            max: params.max,
            title: params.title,
        } 
    }

    handleChange(operation, e){
        let value = this.currentParams.value;
        
        switch (operation) {
            case 'update': value = parseInt(e.target.value); break;
            case '-': value -= 1; break;
            case '+': value += 1; break;
        }

        if (value > this.currentParams.max) {
            value = this.currentParams.max;
        } else if ( isNaN(value) || value < 1 ) {
            value = 1;
        }
        this.funcs.onchange(value);
    }

    render(){
        let { title, value } = this.currentParams;
        
        return <div>
                    <input
                        type='button'
                        value='-'
                        onclick={this.handleChange.bind(this, '-')}
                    />
                    <input 
                        placeholder={title} 
                        onchange={this.handleChange.bind(this, 'update')}
                        type="number"  
                        value={value}
                    />
                    <input
                        type='button'
                        value='+'
                        onclick={this.handleChange.bind(this, '+')}
                    />
                </div>
    }
}