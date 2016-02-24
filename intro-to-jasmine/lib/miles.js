module.exports = {
  hasEnoughGas: function(car, route){
    if(car.milesPerGallon * car.gallonsInTank > route.miles){
      return true;
    } else {
      return false;
    }
  }
};
