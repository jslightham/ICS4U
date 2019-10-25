function consoleTest(){
    //console.log("");

    var x = 7;
    //console.log(x);

    x = 'change_the_type';
    //console.log(x);

    var arr = [];

    arr[6] = 18;
    arr[11] = 'hello';
    //arr[20] = arr;

    arr[3] = function(){console.log('hi');};
    
    //arr[3]();

    var obj = {};
    obj.color = 'red';
    obj.height = 7;
    obj['shoesize'] = 5;
    obj[5] = 8;

    obj.func1 = function(x){alert(x);};

    //console.log(obj);

    //obj.func1(5);

    arr.push(99);
    arr.pop();
    //console.log(arr.splice(6,8));

    //iterator(arr); // if iterating through an object, you must use keys

    mystery(1, 2, "hello");
}

function iterator(coll){
    for(var val in coll){ // of returns value, in returns keys
        if(val !== undefined)
            console.log('key: ' + val + ' value: ' + coll.val);
    }
}

function mystery(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}