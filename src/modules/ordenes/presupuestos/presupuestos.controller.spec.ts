import { Test, TestingModule } from '@nestjs/testing';
import { PresupuestosController } from './presupuestos.controller';
import { PresupuestosService } from './presupuestos.service';

describe('PresupuestosController', () => {
  let controller: PresupuestosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresupuestosController],
      providers: [PresupuestosService],
    }).compile();

    controller = module.get<PresupuestosController>(PresupuestosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
