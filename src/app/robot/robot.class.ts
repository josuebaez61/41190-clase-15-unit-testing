export class Robot {
  nombrePiloto: string;
  panelesEncendidos = false;
  energia = 100;
  constructor(nombrePiloto: string) {
    this.nombrePiloto = nombrePiloto;
  }

  iniciarSistema(): void {
    if (this.energia) {
      this.encenderPaneles()
      this.saludarPiloto();
    } else {
      throw new Error('NO_ENERGY');
    }
  }

  encenderPaneles(): void {
    this.panelesEncendidos = true;
  }

  saludarPiloto() {
    console.log(`Bienvenido, ${this.nombrePiloto}`);
  }
}
