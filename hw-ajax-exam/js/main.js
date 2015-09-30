$.ajax({
  url: 'http://api.randomuser.me/?results=10',
  dataType: 'json',
  success: function(data){
    console.log(data);

    $.each(data.results, function(index,people){
    	var li = $('<li>');
    	console.log(li);
    	
    	var photo_url = people.user.picture.thumbnail;
    	li.append('<img src='+photo_url+'>');

    	var first_name = people.user.name.first;
    	var last_name = people.user.name.last;
    	li.append('<br>').append(first_name +' ' + last_name);
      li.append('<br>')

      li.append('<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Contact Me</button>')
      
      $('#name ul').append(li);

      //加入電話資訊
      var number = people.user.phone;
      $('#box-info h1').append(number);



    });
  }
});