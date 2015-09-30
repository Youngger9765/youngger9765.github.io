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
      li.append('<a href="#myModal" class="btn btn-lg btn-primary" data-toggle="modal">contact me</a>')

    	
    	

    	$('#name ul').append(li);
    });
  }
});