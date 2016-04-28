Options = new Mongo.Collection('options');

if(Meteor.isClient){
  
  Template.optionList.helpers({
      'option': function(){
          return Options.find({}, {sort: {guessdate: 1} })
      }
  });
  
  Template.modal.helpers({
      'option': function(){
          return Options.find({}, {sort: {name: 1} })
      },
      
      'formattedDate': function(){
        return moment(this.date).format("MMMM Do YYYY, h:mm a");
      }
  });  

  Template.modal.events({
    'click .myBtn': function(){
      $(".modal").css('display', 'block');
    },
    'click .close': function(){
      $(".modal").css('display', 'none');
    },
    'click .myBtn-2': function(){
      $(".modal-2").css('display', 'block');
    },
    'click .close-2': function(){
      $(".modal-2").css('display', 'none');
    },    
    
    
     'submit form': function(event){
          event.preventDefault();
          Options.insert({
              name: event.target.optionName.value,
              url: event.target.optionURL.value,
              guessdate: event.target.optionDate.value,
              date: new Date(),
              angle: (event.target.optionDate.value)-2016
          });
          event.target.optionName.value = "";
          event.target.optionURL.value = "";
          event.target.optionDate.value ="";
          
          $(".modal").css('display', 'none');
      }
  });

}
