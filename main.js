//javascript

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('img').onclick = function () {
	alert('Please dont poke doge!');
}

document.querySelector('#dogQuote').onclick = function () {
	alert('Dog quote superior to other quotes');
}

document.querySelector('#falsedogQuote').onclick = function () {
	alert('This dog quote not authentic');
}

alert('CAUTION: VIRUS DETECTED')
alert('💀YOUR COMPUTER HAS BEEN INFECTED💀')
alert('Dogs deployed to fight virus 💀💥🐕🐕🐕🐕🐕🐕🐕')
alert('Virus defeated')


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://i49.tinypic.com/9bkx2p.jpg') {
      myImage.setAttribute ('src','http://s3.amazonaws.com/barkpost-assets/50+GIFs/17.gif');
    } else {
      myImage.setAttribute ('src','http://i49.tinypic.com/9bkx2p.jpg');
    }
}



