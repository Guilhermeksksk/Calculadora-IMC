function calcular(){
			var nome = document.getElementById('nome').value
			var altura = document.getElementById('altura').value
			var peso = document.getElementById('peso').value
			var resultado = document.getElementById('place')
			

			altura = altura / 100

			var m = peso / (altura * altura)
			 m = Math.ceil(m)

			var classificacao = ''

			if (m < 16) {
				classificacao ="Baixo peso muito grave"
			}
			if (m >= 16 && m <= 16.99 ) {
				classificacao ="Baixo peso muito grave"
			}
			if (m >= 17 && m <= 18.49 ) {
				classificacao ="Baixo peso"
			}
			if ( m >= 18.50 && m <= 24.99) {
				classificacao ="Peso normal "
			}
			if (m >= 25 && m <= 29.99) {
				classificacao =	"Sobrepeso"
			}
			if (m >=  30 && m <=34.99) {
				classificacao ="Obesidade grau I"
			}
			if ( m >= 35 && m <= 39.99) {
				classificacao ="Obesidade grau II"
			}
			if (m >=40) {
				classificacao ="Obesidade grau III"
			}
			resultado.textContent= `${nome} sua massa corporal é igual a ${m}, sendo classificado como: ${classificacao}`
		}