angular.module("thebestoferta").factory("manipulaBanco", function ($http) {
	var _getLista = function () {
		return $http.get("pegarAnunciantes.php");
	};

	var _saveUsuario = function (usuario) {
		return $http.post("inserirAnunciante.php", usuario);
	};

	return {
		getLista: _getLista,
		saveUsuario: _saveUsuario
	};
});