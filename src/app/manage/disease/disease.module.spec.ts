import { DiseaseModule } from './disease.module';

describe('DiseaseModule', () => {
  let diseaseModule: DiseaseModule;

  beforeEach(() => {
    diseaseModule = new DiseaseModule();
  });

  it('should create an instance', () => {
    expect(diseaseModule).toBeTruthy();
  });
});
