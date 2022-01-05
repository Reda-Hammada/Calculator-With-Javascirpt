class Caluculatrice {
    #_num1;
    #_num2;
    #_result;
    #_operation;

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
        this.#_operation = value
    }

    get result(){
        return this.#_result;
    }

    set result(value){
        this.#_result = value;
    }

    calculate(){
        this.#_reuslt = undefined;
        switch(this.#_operation){
            case '+':
                this.#_result = this.#_num1 + this.#_num2;
                break;
            case '-':
                this.#_result = this.#_num1 - this.#_num2;
                break;
        }

        return this.#_result;
    }

  
}