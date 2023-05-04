import { Robot } from "./robot.class";


describe('Pruebas sobre la clase Robot', () => {

  // it(
  //   'El valor inicial de la propiedad "energia" debe ser 100 al instanciarse la clase',
  //   () => {
  //     const robot = new Robot("Piloto");

  //     // Espero que
  //     expect(robot.energia).toBe(100);
  //   }
  // );


  it('Al llamar el metodo iniciarSistema debe llamarse saludarPiloto si la energia es mayor a 0', () => {

    const robot = new Robot('Piloto');

    const spySaludarAlPiloto = spyOn(robot, 'saludarAlPiloto');

    robot.iniciarSistema();

    // Espero que spySaludarAlPiloto haya sido llamada
    expect(spySaludarAlPiloto).toHaveBeenCalled();
  });

  it(
    'Al ejecutar el método "iniciarSistema" debe lanzar un error si la energia es 0',
    () => {
      const robot = new Robot('Piloto');
      robot.energia = 0;

      expect(() => robot.iniciarSistema()).toThrowError('NO ENERGY')
      // expect(() => robot.iniciarSistema()).toThrow(new Error('NO ENERGY'))
    }
  )


  it('Debe ejecutar un log de consola al llamar saludarAlPiloto', () => {
    const robot = new Robot('Piloto');
    const spyOnConsoleLog =  spyOn(console, 'log');

    robot.saludarAlPiloto();

    expect(spyOnConsoleLog).toHaveBeenCalled();
  });
});
