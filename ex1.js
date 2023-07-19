class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        }
    
        acelerar() {
        console.log(`O veículo ${this.marca} ${this.modelo} está acelerando.`);
        }
    
        frear() {
        console.log(`O veículo ${this.marca} ${this.modelo} está freando.`);
        }
    }
    
    class Carro extends Veiculo {
        constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
        }
    
        abrirPortas() {
        console.log(`As portas do carro ${this.marca} ${this.modelo} (${this.cor}) estão abertas.`);
        }
    }
    
    class Moto extends Veiculo {
        constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
        }
    
        empinar() {
        console.log(`A moto ${this.marca} ${this.modelo} (${this.cilindradas} cilindradas) está empinando.`);
        }
    }
    
    class Caminhao extends Veiculo {
        constructor(marca, modelo, cargaMaxima) {
        super(marca, modelo);
        this.cargaMaxima = cargaMaxima;
        }
    
        carregar() {
        console.log(`O caminhão ${this.marca} ${this.modelo} (Carga máxima: ${this.cargaMaxima} kg) está sendo carregado.`);
        }
    }

const carro1 = new Carro("Ford", "Fiesta", "Azul");
const moto1 = new Moto("Honda", "CBR500R", 500);
const caminhao1 = new Caminhao("Scania", "R500", 10000);
const carro2 = new Carro("Chevrolet", "Cruze", "Preto");

carro1.acelerar();
carro1.abrirPortas();

moto1.frear();
moto1.empinar();

caminhao1.acelerar();
caminhao1.carregar();

console.log(`Modelo do segundo carro: ${carro2.modelo}`);