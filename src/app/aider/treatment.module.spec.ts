import { TreatmentModule } from './treatment.module';

describe('TreatmentModule', () => {
  let treatmentModule: TreatmentModule;

  beforeEach(() => {
    treatmentModule = new TreatmentModule();
  });

  it('should create an instance', () => {
    expect(treatmentModule).toBeTruthy();
  });
});
