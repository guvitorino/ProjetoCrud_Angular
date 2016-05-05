angular.module("thebestoferta", []);
angular.module("thebestoferta").controller("thebestoferta", function ($scope) {
	$scope.app = "thebestoferta";
	$scope.usuarios = [];
	$scope.adicionarUsuario = function (usuario) {
		$scope.usuarios.push(angular.copy(usuario));
		delete $scope.usuario;
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
});