// @ts-nocheck
const myhero = ['thor', 'spidermen']

const heropower = {
    thor: 'hammer',
    spiderman:'web'
}

Object.prototype.mith= function() {
//   console.log('mith is here to all object');  
}

// myhero.mith()
// heropower.mith()


Array.prototype.heymith = function () {
    // console.log('say hii mith');
}

// heropower.heymith()
myhero.heymith()

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
}

"         mithlesh            ".trueLength()
"mithlesh devdas   ".trueLength()

String.prototype.uperandlower = function () {
    if (this == this.toUpperCase()) {
        
        console.log(this.toLowerCase());
    } else {
        console.log(this.toUpperCase());
    }
}

"MITH".uperandlower()




