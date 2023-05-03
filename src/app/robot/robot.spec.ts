import { Robot } from "./robot.class";

fdescribe('Pruebas sobre la clase Robot', () => {
  it('El valor iniciar de la propiedad energia debe ser 100 al instanciar la clase', () => {
    const robot = new Robot('Piloto');
    expect(robot.energia).toBe(100);
  })


  it('Al iniciar el sistema debe saludar al piloto', () => {
    const robot = new Robot('Piloto');
    const spyOnIniciarSistema = spyOn(robot, 'saludarPiloto');
    robot.iniciarSistema();
    expect(spyOnIniciarSistema).toHaveBeenCalled();
  })

  it('Debe lanzar un error si se intenta iniciar sin energia', () => {
    const robot = new Robot('Piloto');
    robot.energia = 0;
    expect(() => robot.iniciarSistema()).toThrowError('NO_ENERGY')
  });

  it('saludarPiloto debe loggear en consola', () => {
    const robot = new Robot('Piloto');
    const spyOnConsoleLog = spyOn(console, 'log');
    robot.saludarPiloto();
    expect(spyOnConsoleLog).toHaveBeenCalled();
  });
});
