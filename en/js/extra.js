$(function(){
  $subscriptionForm = $("#subscription");
  $feedbackForm = $("#feedback");

  var subscriptionFormInProgress = false;
  $subscriptionForm.submit(function(){
  	if (subscriptionFormInProgress) return false;
  	subscriptionFormInProgress = true;
    var form = this;
    var $form = $(form);
    $.ajax({
      type: "POST",
      url: $form.attr('action'),
      data: $form.serialize(),
      success: function(response){
        form.reset();
        alert("Thank you!");
        subscriptionFormInProgress = false;
      },
      error: function(){
        alert("Error! It seems you're already subscribed!");
        subscriptionFormInProgress = false;
      }
    });
    return false;
  });

  var feedbackFormInProgress = false;
  $feedbackForm.submit(function(){
  	if (feedbackFormInProgress) return false;
  	feedbackFormInProgress = true;
    var form = this;
    var $form = $(form);
    $.ajax({
      type: "POST",
      url: $form.attr('action'),
      data: $form.serialize(),
      success: function(response){
        form.reset();
        alert("Thank you!");
        feedbackFormInProgress = false;
      },
      error: function(){
        alert("Error!");
        feedbackFormInProgress = false;
      }
    });
    return false;
  });
});