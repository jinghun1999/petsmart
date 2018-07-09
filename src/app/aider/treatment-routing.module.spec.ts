import { TreatmentRoutingModule } from './treatment-routing.module';

describe('TreatmentRoutingModule', () => {
  let treatmentRoutingModule: TreatmentRoutingModule;

  beforeEach(() => {
    treatmentRoutingModule = new TreatmentRoutingModule();
  });

  it('should create an instance', () => {
    expect(treatmentRoutingModule).toBeTruthy();
  });
});
