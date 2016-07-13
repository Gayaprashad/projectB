/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/


$(function(){
    $('.carousel').carousel({
        interval: 3000
    });


        $('#alertMe').click(function(e){

            e.preventDefault();

            $('#successAlert').slideDown();

        });

        $('a.pop').click(funtion(e){
            e.preventDeault();
        });



});
