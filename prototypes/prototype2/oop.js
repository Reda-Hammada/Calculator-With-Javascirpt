class Calculatrice{
    #_num1;
    #_num2;
    #_operation;
    #_result;

    // getters and setters 
    get num1(){
        return this.#_num1;
    }

    set num1(value){
        this.#_num1 = value;
    }

    get num2(){
        return this.#_num2;
    }

    set num2(value){
        this.#_num2 = value;
    }

    get operation(){
        return this.#_operation;
    }

    set operation(value){
        this.#_operation = value;
    }

    get result(){
        return this.#_result;
    }

    set result(value){
        this.#_result = value;
    }

    // calculation fucntion

      calc() {
        this.#_result = undefined;

        switch(this.#_operation){
            case '+':
                this.#_result = this.#_num1 + this.#_num2;
                break;
            case '-':
                this.#_result = this.#_num1 - this.#_num2;
                break;
            default:
                break;
        }

        return this.#_result;
    
      }
    reset(){
        this.#_num1 = undefined;
        this.#_num2 = undefined;
        this.#_result = undefined;
        this.#_operation = undefined;
    }
}

    
    
