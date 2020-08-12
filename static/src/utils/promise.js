function Promise(executor){
    const that = this;
    this.state = 'pending';
    this.reject = function(){
        //
    }
    this.resolve = function(){
        //
    }
    executor(this.resolve, this.reject)
}


export default Promise;