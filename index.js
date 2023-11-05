console.log("Working ");

function BrowserHistory() {
  this.history = [];
  this.index = -1;

  this.current = function () {
    return this.history[this.index];
  };

  this.visit = function (url) {
    this.history[++this.index] = url;
    this.history.length = this.index + 1;
  };

  this.forward = function () {
    this.index = Math.min(++this.index, this.history.length - 1);
  };

  this.backward = function () {
    this.index = Math.max(--this.index, 0);
  };
}

const brow = new BrowserHistory();

brow.visit("A");
console.log(brow.current());
brow.visit("B");
brow.backward();
console.log(brow.current());
brow.forward();
console.log(brow.current());
