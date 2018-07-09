import { HospitalRoutingModule } from './hospital-routing.module';

describe('HospitalRoutingModule', () => {
  let hospitalRoutingModule: HospitalRoutingModule;

  beforeEach(() => {
    hospitalRoutingModule = new HospitalRoutingModule();
  });

  it('should create an instance', () => {
    expect(hospitalRoutingModule).toBeTruthy();
  });
});
