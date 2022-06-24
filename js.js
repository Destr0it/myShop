const url = "https://my-json-server.typicode.com/Destr0it/MartPlace/products";

$.ajax({
    url: url,
    success: function (response) {
        console.log(response);
    }
});