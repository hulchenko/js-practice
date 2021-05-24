// window
function a() {
  console.log(this);
  this.newvariable = 'hello';
}

// window
var b = function () {
  console.log(this);
};

a();

console.log(newvariable); // assigned to window object

b();

var c = {
  name: 'The c object',
  log: function () {
    console.log('THIS IS NOW A WINDOW OBJECT: ', this); //shows var c and it's objects
    var self = this; //secure this, that is assigned to var c to var 'self' to avoid errors later and use it as 'this'

    self.name = 'Updated c object';
    console.log(self);

    var setname = function (newname) {
      self.name = newname; //had this not been used with 'self' var - it would point to a WINDOW OBJECT(ex. window.name = newname)
    };
    setname('Updated again! The c object');
    console.log(self);
  },
};

c.log();
